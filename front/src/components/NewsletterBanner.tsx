import React, { useState, useEffect, useRef } from 'react';
import { X, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import api from '../api';

// Global flag to ensure only one banner is active
let isBannerActive = false;

const NewsletterBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const isMounted = useRef(false);

  // Check if this is the active banner instance
  useEffect(() => {
    if (!isBannerActive) {
      isBannerActive = true;
      isMounted.current = true;
    }

    return () => {
      if (isMounted.current) {
        isBannerActive = false;
        isMounted.current = false;
      }
    };
  }, []);

  useEffect(() => {
    // Only proceed if this is the active instance
    if (!isMounted.current) return;

    // Reset visibility first to prevent multiple banners
    setIsVisible(false);

    const dismissed = localStorage.getItem('newsletter-dismissed');
    const subscribed = localStorage.getItem('newsletter-subscribed');
    const storedEmail = localStorage.getItem('newsletter-email');

    // Mostrar banner si no está dismissed y no está suscrito
    const shouldShow = dismissed !== 'true' && subscribed !== 'true';

    if (shouldShow) {
      // Show banner after 0.5 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);

      // Si hay un email guardado, usarlo
      if (storedEmail) {
        setEmail(storedEmail);
      }

      return () => clearTimeout(timer);
    }
  }, [isMounted]);

  const handleClose = () => {
    setIsVisible(false);
    // Marcar como dismissed hasta el próximo login/logout
    localStorage.setItem('newsletter-dismissed', 'true');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setStatus('error');
      setMessage('Por favor, introduce tu email');
      return;
    }

    setIsLoading(true);
    setStatus('idle');

    try {
      const response = await fetch(api.newsletter.subscribe, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setMessage(data.message || '¡Suscripción exitosa!');
        localStorage.setItem('newsletter-subscribed', 'true');
        localStorage.setItem('newsletter-email', email.trim());
        setEmail('');
        
        // Close banner after 3 seconds
        setTimeout(() => {
          setIsVisible(false);
        }, 3000);
      } else {
        setStatus('error');
        setMessage(data.message || 'Error al suscribirse');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Error de conexión. Inténtalo de nuevo.');
      console.error('Newsletter subscription error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Don't render if this is not the active instance
  if (!isMounted.current) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="newsletter-banner-unique"
          data-component="newsletter-banner"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#ffffff',
            color: '#1f2937',
            zIndex: 9999,
            boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
            borderTop: '1px solid #e5e7eb',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}
        >
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            padding: '16px 20px',
            position: 'relative'
          }}>
            {/* Close button */}
            <motion.button
              onClick={handleClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                background: 'transparent',
                border: 'none',
                color: '#6b7280',
                cursor: 'pointer',
                padding: '4px',
                borderRadius: '4px'
              }}
            >
              <X size={18} />
            </motion.button>

            <div style={{ 
              display: 'flex', 
              flexDirection: window.innerWidth < 768 ? 'column' : 'row',
              alignItems: 'center',
              gap: '16px',
              paddingRight: '40px'
            }}>
              {/* Content */}
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                style={{ flex: 1, textAlign: window.innerWidth < 768 ? 'center' : 'left' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px', justifyContent: window.innerWidth < 768 ? 'center' : 'flex-start' }}>
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Mail size={16} style={{ color: '#3b82f6' }} />
                  </motion.div>
                  <span style={{ fontSize: '15px', fontWeight: '500', color: '#1f2937' }}>
                    Newsletter
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: '13px', color: '#6b7280' }}>
                  Recibe ofertas y novedades
                </p>
              </motion.div>

              {/* Form or Success Message */}
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                style={{ minWidth: '280px', width: window.innerWidth < 768 ? '100%' : 'auto' }}
              >
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        gap: '6px',
                        padding: '6px',
                        color: '#059669'
                      }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.1, ease: "backOut" }}
                      >
                        <CheckCircle size={16} />
                      </motion.div>
                      <span style={{ fontSize: '13px', fontWeight: '500' }}>{message}</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px' }}>
                        <motion.input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="tu@email.com"
                          disabled={isLoading}
                          whileFocus={{ scale: 1.02 }}
                          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                          style={{
                            flex: 1,
                            padding: '8px 12px',
                            border: '1px solid #d1d5db',
                            borderRadius: '6px',
                            backgroundColor: '#ffffff',
                            color: '#1f2937',
                            fontSize: '14px',
                            outline: 'none',
                            cursor: 'text'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = '#3b82f6';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = '#d1d5db';
                          }}
                        />
                        <motion.button
                          type="submit"
                          disabled={isLoading || !email.trim()}
                          whileHover={{ scale: isLoading || !email.trim() ? 1 : 1.05 }}
                          whileTap={{ scale: isLoading || !email.trim() ? 1 : 0.95 }}
                          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                          style={{
                            padding: '8px 16px',
                            backgroundColor: '#3b82f6',
                            color: 'white',
                            border: 'none',
                            borderRadius: '6px',
                            fontSize: '14px',
                            fontWeight: '500',
                            cursor: isLoading || !email.trim() ? 'not-allowed' : 'pointer',
                            opacity: isLoading || !email.trim() ? 0.5 : 1,
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {isLoading ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              style={{ display: 'inline-block' }}
                            >
                              ⟳
                            </motion.div>
                          ) : (
                            'Suscribirse'
                          )}
                        </motion.button>
                      </form>
                      
                      <AnimatePresence>
                        {status === 'error' && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                            style={{ 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: '4px',
                              fontSize: '12px',
                              color: '#ef4444',
                              marginTop: '4px'
                            }}
                          >
                            <motion.div
                              animate={{ x: [0, -2, 2, 0] }}
                              transition={{ duration: 0.3, repeat: 2 }}
                            >
                              <AlertCircle size={12} />
                            </motion.div>
                            <span>{message}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewsletterBanner;
