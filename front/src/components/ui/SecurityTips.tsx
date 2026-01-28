import React from 'react';
import { AlertTriangle, Check, Lock, RefreshCw } from 'lucide-react';
import { Alert, AlertDescription } from './alert';
import { Badge } from './badge';

interface SecurityTipsProps {
    showTitle?: boolean;
    variant?: 'info' | 'warning' | 'success';
}

export const SecurityTips: React.FC<SecurityTipsProps> = ({ 
    showTitle = true,
    variant = 'info'
}) => {
    const iconMap = {
        info: Lock,
        warning: AlertTriangle,
        success: Check
    };

    const colorMap = {
        info: 'border-blue-200 bg-blue-50',
        warning: 'border-yellow-200 bg-yellow-50', 
        success: 'border-green-200 bg-green-50'
    };

    const Icon = iconMap[variant];

    return (
        <Alert className={`${colorMap[variant]} border`}>
            <Icon className="h-4 w-4" />
            {showTitle && (
                <h4 className="font-semibold text-sm mb-2">
                    Requisitos de Seguridad para Contraseñas
                </h4>
            )}
            <AlertDescription>
                <div className="space-y-3">
                    <p className="text-sm font-medium">Tu contraseña debe cumplir con:</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">✓</Badge>
                            <span>Mínimo 8 caracteres</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">A</Badge>
                            <span>Al menos una mayúscula</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">a</Badge>
                            <span>Al menos una minúscula</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">1</Badge>
                            <span>Al menos un número</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">@</Badge>
                            <span>Al menos un símbolo</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">⌀</Badge>
                            <span>Sin espacios en blanco</span>
                        </div>
                    </div>

                    <div className="border-t pt-3 mt-3">
                        <p className="text-sm font-medium mb-2">Consejos adicionales:</p>
                        <ul className="text-xs space-y-1 text-gray-600">
                            <li>• Evita patrones comunes como "123", "abc", "qwerty"</li>
                            <li>• No uses información personal (nombre, email, fecha de nacimiento)</li>
                            <li>• Combina palabras con números y símbolos</li>
                            <li>• Considera usar una frase de contraseña: Ej. "MiCasa#Verde2024!"</li>
                            <li className="flex items-center gap-1">
                                • <RefreshCw className="w-3 h-3" /> Usa el generador automático para máxima seguridad
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-3 rounded border">
                        <p className="text-xs font-medium text-gray-700 mb-1">Ejemplo de contraseña segura:</p>
                        <code className="text-xs bg-gray-100 px-2 py-1 rounded">MiCafe&Libro2024!</code>
                        <p className="text-xs text-gray-500 mt-1">
                            (8+ caracteres, mayúsculas, minúsculas, números y símbolos)
                        </p>
                    </div>
                </div>
            </AlertDescription>
        </Alert>
    );
};

export default SecurityTips;
