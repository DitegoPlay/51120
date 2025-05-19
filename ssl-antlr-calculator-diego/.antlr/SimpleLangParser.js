// Generated from SimpleLang.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import SimpleLangListener from './SimpleLangListener.js';
const serializedATN = [4,1,16,70,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,1,0,1,0,1,1,1,1,3,
1,28,8,1,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,3,4,44,
8,4,1,4,3,4,47,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,
8,1,8,1,9,1,9,3,9,66,8,9,1,10,1,10,1,10,0,0,11,0,2,4,6,8,10,12,14,16,18,
20,0,2,1,0,1,2,1,0,13,15,62,0,22,1,0,0,0,2,25,1,0,0,0,4,29,1,0,0,0,6,31,
1,0,0,0,8,46,1,0,0,0,10,48,1,0,0,0,12,54,1,0,0,0,14,57,1,0,0,0,16,59,1,0,
0,0,18,63,1,0,0,0,20,67,1,0,0,0,22,23,3,2,1,0,23,24,5,0,0,1,24,1,1,0,0,0,
25,27,3,4,2,0,26,28,3,2,1,0,27,26,1,0,0,0,27,28,1,0,0,0,28,3,1,0,0,0,29,
30,3,6,3,0,30,5,1,0,0,0,31,32,5,3,0,0,32,33,5,7,0,0,33,34,3,8,4,0,34,35,
5,8,0,0,35,36,5,4,0,0,36,37,5,10,0,0,37,38,3,14,7,0,38,39,5,11,0,0,39,40,
5,9,0,0,40,7,1,0,0,0,41,43,3,10,5,0,42,44,3,8,4,0,43,42,1,0,0,0,43,44,1,
0,0,0,44,47,1,0,0,0,45,47,3,12,6,0,46,41,1,0,0,0,46,45,1,0,0,0,47,9,1,0,
0,0,48,49,5,6,0,0,49,50,5,10,0,0,50,51,3,16,8,0,51,52,5,11,0,0,52,53,5,9,
0,0,53,11,1,0,0,0,54,55,5,5,0,0,55,56,5,9,0,0,56,13,1,0,0,0,57,58,7,0,0,
0,58,15,1,0,0,0,59,60,5,12,0,0,60,61,3,18,9,0,61,62,5,12,0,0,62,17,1,0,0,
0,63,65,3,20,10,0,64,66,3,18,9,0,65,64,1,0,0,0,65,66,1,0,0,0,66,19,1,0,0,
0,67,68,7,1,0,0,68,21,1,0,0,0,4,27,43,46,65];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SimpleLangParser extends antlr4.Parser {

    static grammarFileName = "SimpleLang.g4";
    static literalNames = [ null, "'0'", "'1'", "'do'", "'while'", "'break'", 
                            "'puts'", "'{'", "'}'", "';'", "'('", "')'", 
                            "'\"'" ];
    static symbolicNames = [ null, null, null, "DO", "WHILE", "BREAK", "PUTS", 
                             "LLAVE_ABIERTA", "LLAVE_CERRADA", "PUNTO_Y_COMA", 
                             "PAREN_ABIERTO", "PAREN_CERRADO", "COMILLA", 
                             "LETRA", "DIGITO", "SIMBOLO", "WS" ];
    static ruleNames = [ "programa", "instrucciones", "instruccion", "bucle", 
                         "sentencia", "salida", "terminar", "condicion", 
                         "cadena", "caracteres", "caracter" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SimpleLangParser.ruleNames;
        this.literalNames = SimpleLangParser.literalNames;
        this.symbolicNames = SimpleLangParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SimpleLangParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.instrucciones();
	        this.state = 23;
	        this.match(SimpleLangParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SimpleLangParser.RULE_instrucciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.instruccion();
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 26;
	            this.instrucciones();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SimpleLangParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.bucle();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bucle() {
	    let localctx = new BucleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SimpleLangParser.RULE_bucle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.match(SimpleLangParser.DO);
	        this.state = 32;
	        this.match(SimpleLangParser.LLAVE_ABIERTA);
	        this.state = 33;
	        this.sentencia();
	        this.state = 34;
	        this.match(SimpleLangParser.LLAVE_CERRADA);
	        this.state = 35;
	        this.match(SimpleLangParser.WHILE);
	        this.state = 36;
	        this.match(SimpleLangParser.PAREN_ABIERTO);
	        this.state = 37;
	        this.condicion();
	        this.state = 38;
	        this.match(SimpleLangParser.PAREN_CERRADO);
	        this.state = 39;
	        this.match(SimpleLangParser.PUNTO_Y_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SimpleLangParser.RULE_sentencia);
	    var _la = 0;
	    try {
	        this.state = 46;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 41;
	            this.salida();
	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5 || _la===6) {
	                this.state = 42;
	                this.sentencia();
	            }

	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 45;
	            this.terminar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SimpleLangParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(SimpleLangParser.PUTS);
	        this.state = 49;
	        this.match(SimpleLangParser.PAREN_ABIERTO);
	        this.state = 50;
	        this.cadena();
	        this.state = 51;
	        this.match(SimpleLangParser.PAREN_CERRADO);
	        this.state = 52;
	        this.match(SimpleLangParser.PUNTO_Y_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SimpleLangParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(SimpleLangParser.BREAK);
	        this.state = 55;
	        this.match(SimpleLangParser.PUNTO_Y_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SimpleLangParser.RULE_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        _la = this._input.LA(1);
	        if(!(_la===1 || _la===2)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, SimpleLangParser.RULE_cadena);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.match(SimpleLangParser.COMILLA);
	        this.state = 60;
	        this.caracteres();
	        this.state = 61;
	        this.match(SimpleLangParser.COMILLA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caracteres() {
	    let localctx = new CaracteresContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, SimpleLangParser.RULE_caracteres);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this.caracter();
	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 57344) !== 0)) {
	            this.state = 64;
	            this.caracteres();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caracter() {
	    let localctx = new CaracterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, SimpleLangParser.RULE_caracter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 57344) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

SimpleLangParser.EOF = antlr4.Token.EOF;
SimpleLangParser.T__0 = 1;
SimpleLangParser.T__1 = 2;
SimpleLangParser.DO = 3;
SimpleLangParser.WHILE = 4;
SimpleLangParser.BREAK = 5;
SimpleLangParser.PUTS = 6;
SimpleLangParser.LLAVE_ABIERTA = 7;
SimpleLangParser.LLAVE_CERRADA = 8;
SimpleLangParser.PUNTO_Y_COMA = 9;
SimpleLangParser.PAREN_ABIERTO = 10;
SimpleLangParser.PAREN_CERRADO = 11;
SimpleLangParser.COMILLA = 12;
SimpleLangParser.LETRA = 13;
SimpleLangParser.DIGITO = 14;
SimpleLangParser.SIMBOLO = 15;
SimpleLangParser.WS = 16;

SimpleLangParser.RULE_programa = 0;
SimpleLangParser.RULE_instrucciones = 1;
SimpleLangParser.RULE_instruccion = 2;
SimpleLangParser.RULE_bucle = 3;
SimpleLangParser.RULE_sentencia = 4;
SimpleLangParser.RULE_salida = 5;
SimpleLangParser.RULE_terminar = 6;
SimpleLangParser.RULE_condicion = 7;
SimpleLangParser.RULE_cadena = 8;
SimpleLangParser.RULE_caracteres = 9;
SimpleLangParser.RULE_caracter = 10;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_programa;
    }

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	EOF() {
	    return this.getToken(SimpleLangParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitPrograma(this);
		}
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_instrucciones;
    }

	instruccion() {
	    return this.getTypedRuleContext(InstruccionContext,0);
	};

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitInstrucciones(this);
		}
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_instruccion;
    }

	bucle() {
	    return this.getTypedRuleContext(BucleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitInstruccion(this);
		}
	}


}



class BucleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_bucle;
    }

	DO() {
	    return this.getToken(SimpleLangParser.DO, 0);
	};

	LLAVE_ABIERTA() {
	    return this.getToken(SimpleLangParser.LLAVE_ABIERTA, 0);
	};

	sentencia() {
	    return this.getTypedRuleContext(SentenciaContext,0);
	};

	LLAVE_CERRADA() {
	    return this.getToken(SimpleLangParser.LLAVE_CERRADA, 0);
	};

	WHILE() {
	    return this.getToken(SimpleLangParser.WHILE, 0);
	};

	PAREN_ABIERTO() {
	    return this.getToken(SimpleLangParser.PAREN_ABIERTO, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	PAREN_CERRADO() {
	    return this.getToken(SimpleLangParser.PAREN_CERRADO, 0);
	};

	PUNTO_Y_COMA() {
	    return this.getToken(SimpleLangParser.PUNTO_Y_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterBucle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitBucle(this);
		}
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_sentencia;
    }

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	sentencia() {
	    return this.getTypedRuleContext(SentenciaContext,0);
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitSentencia(this);
		}
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_salida;
    }

	PUTS() {
	    return this.getToken(SimpleLangParser.PUTS, 0);
	};

	PAREN_ABIERTO() {
	    return this.getToken(SimpleLangParser.PAREN_ABIERTO, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	PAREN_CERRADO() {
	    return this.getToken(SimpleLangParser.PAREN_CERRADO, 0);
	};

	PUNTO_Y_COMA() {
	    return this.getToken(SimpleLangParser.PUNTO_Y_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitSalida(this);
		}
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_terminar;
    }

	BREAK() {
	    return this.getToken(SimpleLangParser.BREAK, 0);
	};

	PUNTO_Y_COMA() {
	    return this.getToken(SimpleLangParser.PUNTO_Y_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitTerminar(this);
		}
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_condicion;
    }


	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitCondicion(this);
		}
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_cadena;
    }

	COMILLA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SimpleLangParser.COMILLA);
	    } else {
	        return this.getToken(SimpleLangParser.COMILLA, i);
	    }
	};


	caracteres() {
	    return this.getTypedRuleContext(CaracteresContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitCadena(this);
		}
	}


}



class CaracteresContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_caracteres;
    }

	caracter() {
	    return this.getTypedRuleContext(CaracterContext,0);
	};

	caracteres() {
	    return this.getTypedRuleContext(CaracteresContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterCaracteres(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitCaracteres(this);
		}
	}


}



class CaracterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_caracter;
    }

	LETRA() {
	    return this.getToken(SimpleLangParser.LETRA, 0);
	};

	DIGITO() {
	    return this.getToken(SimpleLangParser.DIGITO, 0);
	};

	SIMBOLO() {
	    return this.getToken(SimpleLangParser.SIMBOLO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterCaracter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitCaracter(this);
		}
	}


}




SimpleLangParser.ProgramaContext = ProgramaContext; 
SimpleLangParser.InstruccionesContext = InstruccionesContext; 
SimpleLangParser.InstruccionContext = InstruccionContext; 
SimpleLangParser.BucleContext = BucleContext; 
SimpleLangParser.SentenciaContext = SentenciaContext; 
SimpleLangParser.SalidaContext = SalidaContext; 
SimpleLangParser.TerminarContext = TerminarContext; 
SimpleLangParser.CondicionContext = CondicionContext; 
SimpleLangParser.CadenaContext = CadenaContext; 
SimpleLangParser.CaracteresContext = CaracteresContext; 
SimpleLangParser.CaracterContext = CaracterContext; 
