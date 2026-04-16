'use client'
import { useRef, useState, useEffect, useCallback } from 'react'

type Status = 'idle' | 'loading' | 'active' | 'denied' | 'error'

export default function MirrorWidget() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [mirrored, setMirrored] = useState(true)
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('user')

  const startCamera = useCallback(async (facing: 'user' | 'environment' = facingMode) => {
    setStatus('loading')
    try {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(t => t.stop())
      }
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: facing, width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: false,
      })
      streamRef.current = stream
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
      setStatus('active')
    } catch (err: unknown) {
      if (err instanceof Error && (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError')) {
        setStatus('denied')
      } else {
        setStatus('error')
      }
    }
  }, [facingMode])

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop())
      streamRef.current = null
    }
    if (videoRef.current) videoRef.current.srcObject = null
    setStatus('idle')
  }, [])

  const switchCamera = useCallback(() => {
    const next = facingMode === 'user' ? 'environment' : 'user'
    setFacingMode(next)
    startCamera(next)
  }, [facingMode, startCamera])

  const toggleFullscreen = useCallback(() => {
    const el = videoRef.current
    if (!el) return
    if (!document.fullscreenElement) {
      el.requestFullscreen().catch(() => {})
    } else {
      document.exitFullscreen().catch(() => {})
    }
  }, [])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (streamRef.current) streamRef.current.getTracks().forEach(t => t.stop())
    }
  }, [])

  const videoStyle: React.CSSProperties = {
    width: '100%',
    maxHeight: 520,
    objectFit: 'cover',
    borderRadius: 12,
    display: 'block',
    transform: mirrored ? 'scaleX(-1)' : 'scaleX(1)',
    transition: 'transform 0.2s',
  }

  return (
    <div className="tool-card">
      {/* Video area */}
      <div style={{
        background: '#0a0a0a',
        borderRadius: 12,
        overflow: 'hidden',
        position: 'relative',
        minHeight: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
      }}>
        {/* Video element always rendered so ref is available */}
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          style={{ ...videoStyle, display: status === 'active' ? 'block' : 'none' }}
        />

        {/* Idle state */}
        {status === 'idle' && (
          <div style={{ textAlign: 'center', padding: 40 }}>
            <div style={{ fontSize: 52, marginBottom: 16 }}>📷</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 8 }}>Online Mirror</div>
            <div style={{ fontSize: 14, color: '#aaa', marginBottom: 24, maxWidth: 320, margin: '0 auto 24px' }}>
              Your browser will ask for camera permission. No video is recorded or uploaded - everything stays on your device.
            </div>
            <button
              onClick={() => startCamera()}
              style={{
                background: '#1D9E75',
                color: '#fff',
                border: 'none',
                borderRadius: 10,
                padding: '14px 32px',
                fontSize: 16,
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Enable Camera
            </button>
          </div>
        )}

        {/* Loading state */}
        {status === 'loading' && (
          <div style={{ textAlign: 'center', padding: 40 }}>
            <div style={{ fontSize: 14, color: '#aaa' }}>Starting camera...</div>
          </div>
        )}

        {/* Permission denied */}
        {status === 'denied' && (
          <div style={{ textAlign: 'center', padding: 40 }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>🚫</div>
            <div style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 8 }}>Camera access denied</div>
            <div style={{ fontSize: 13, color: '#aaa', marginBottom: 20, maxWidth: 320, margin: '0 auto 20px' }}>
              Allow camera access in your browser settings, then click retry.
            </div>
            <button
              onClick={() => startCamera()}
              style={{ background: '#1D9E75', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 24px', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}
            >
              Retry
            </button>
          </div>
        )}

        {/* Error state */}
        {status === 'error' && (
          <div style={{ textAlign: 'center', padding: 40 }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>⚠️</div>
            <div style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 8 }}>Camera not available</div>
            <div style={{ fontSize: 13, color: '#aaa', marginBottom: 20 }}>
              No camera was found or another app is using it.
            </div>
            <button
              onClick={() => startCamera()}
              style={{ background: '#1D9E75', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 24px', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}
            >
              Retry
            </button>
          </div>
        )}

        {/* Fullscreen button overlay */}
        {status === 'active' && (
          <button
            onClick={toggleFullscreen}
            title="Fullscreen"
            style={{
              position: 'absolute',
              top: 12,
              right: 12,
              background: 'rgba(0,0,0,0.5)',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              padding: '6px 10px',
              fontSize: 16,
              cursor: 'pointer',
            }}
          >
            ⛶
          </button>
        )}
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
        {status === 'active' ? (
          <>
            <button
              onClick={() => setMirrored(m => !m)}
              style={{
                background: mirrored ? '#1D9E75' : '#fff',
                color: mirrored ? '#fff' : '#1D9E75',
                border: '1.5px solid #1D9E75',
                borderRadius: 8,
                padding: '10px 20px',
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              {mirrored ? 'Mirror: On' : 'Mirror: Off'}
            </button>
            <button
              onClick={switchCamera}
              style={{
                background: '#fff',
                color: '#444',
                border: '1.5px solid #E2E8F0',
                borderRadius: 8,
                padding: '10px 20px',
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Flip Camera
            </button>
            <button
              onClick={toggleFullscreen}
              style={{
                background: '#fff',
                color: '#444',
                border: '1.5px solid #E2E8F0',
                borderRadius: 8,
                padding: '10px 20px',
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Fullscreen
            </button>
            <button
              onClick={stopCamera}
              style={{
                background: '#fff',
                color: '#e53e3e',
                border: '1.5px solid #e53e3e',
                borderRadius: 8,
                padding: '10px 20px',
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Stop Camera
            </button>
          </>
        ) : (
          status !== 'idle' && (
            <button
              onClick={() => startCamera()}
              className="btn-teal"
            >
              Enable Camera
            </button>
          )
        )}
      </div>

      <p style={{ fontSize: 12, color: '#999', textAlign: 'center', marginTop: 16 }}>
        Your camera feed is never recorded, stored, or sent anywhere. It runs entirely in your browser.
      </p>
    </div>
  )
}
