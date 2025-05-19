grammar SimpleLang;

// Parser
programa: instrucciones EOF;

instrucciones
    : instruccion instrucciones?
    ;

instruccion
    : bucle
    ;

bucle
    : DO LLAVE_ABIERTA sentencia LLAVE_CERRADA WHILE PAREN_ABIERTO condicion PAREN_CERRADO PUNTO_Y_COMA
    ;

sentencia
    : salida sentencia?
    | terminar
    ;

salida
    : PUTS PAREN_ABIERTO CADENA PAREN_CERRADO PUNTO_Y_COMA
    ;

terminar
    : BREAK PUNTO_Y_COMA
    ;

condicion
    : NUMERO
    ;

// Lexer

// Palabras clave
DO: 'do';
WHILE: 'while';
BREAK: 'break';
PUTS: 'puts';

// Símbolos
LLAVE_ABIERTA: '{';
LLAVE_CERRADA: '}';
PUNTO_Y_COMA: ';';
PAREN_ABIERTO: '(';
PAREN_CERRADO: ')';

// Cadenas completas (incluyen comillas)
CADENA: '"' (~["\\] | '\\' .)* '"' ;

// Números
NUMERO: [0-9]+ ;

// Ignorar espacios
WS: [ \t\r\n]+ -> skip;