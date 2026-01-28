import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { API_ENDPOINTS } from '../../config/api';
import LayoutStore from '../../layout/layoutStore';
import { useTranslation } from 'react-i18next';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface ContactResponse {
  success: boolean;
  message: string;
}

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [responseMessage, setResponseMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(API_ENDPOINTS.CONTACT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result: ContactResponse = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setResponseMessage(t('contact_success'));
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setResponseMessage(result.message || t('contact_error'));
      }
    } catch (error) {
      setSubmitStatus('error');
      setResponseMessage(t('connection_error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const subjectOptions = [
    { value: '', label: t('Select a subject') },
    { value: 'consulta-general', label: t('General inquiry') },
    { value: 'informacion-productos', label: t('Product information') },
    { value: 'pedidos', label: t('Order inquiry') },
    { value: 'soporte-tecnico', label: t('Technical support') },
    { value: 'sugerencias', label: t('Suggestions') },
    { value: 'otros', label: t('Others') }
  ];

  return (
    <LayoutStore>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{t('Contact')}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('contact_description')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Información de contacto */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('Contact Information')}</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{t('Email')}</h3>
                    <p className="text-gray-600">administracion@fincavadollano.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{t('Phone')}</h3>
                    <p className="text-gray-600">+34 XXX XXX XXX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{t('Address')}</h3>
                    <p className="text-gray-600">Finca Vadollano<br />Córdoba, España</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">{t('Office Hours')}</h4>
                <p className="text-blue-600 text-sm" style={{ whiteSpace: 'pre-line' }}>
                  {t('office_hours_schedule')}
                </p>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('Send us a message')}</h2>

              {/* Mensaje de estado */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p className="text-green-700">{responseMessage}</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <p className="text-red-700">{responseMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('Full Name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                      placeholder={t('Full Name')}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('Email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                      placeholder={t('Email')}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('Phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                      placeholder="+34 XXX XXX XXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('Subject')} *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    >
                      {subjectOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('Message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 resize-none"
                    placeholder={t('Message')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>{t('Sending...')}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{t('Send Message')}</span>
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 text-sm text-gray-500 text-center">
                {t('required_fields')}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </LayoutStore>
  );
};

export default Contact;
