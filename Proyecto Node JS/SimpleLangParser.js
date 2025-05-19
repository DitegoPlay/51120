// Generated from SimpleLang.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import SimpleLangListener from './SimpleLangListener.js';
const serializedATN = [4,1,12,54,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,1,1,1,1,3,1,22,8,1,1,2,1,2,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,3,4,38,8,4,1,4,3,4,41,8,4,1,5,1,5,
1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,0,0,8,0,2,4,6,8,10,12,14,0,0,48,
0,16,1,0,0,0,2,19,1,0,0,0,4,23,1,0,0,0,6,25,1,0,0,0,8,40,1,0,0,0,10,42,1,
0,0,0,12,48,1,0,0,0,14,51,1,0,0,0,16,17,3,2,1,0,17,18,5,0,0,1,18,1,1,0,0,
0,19,21,3,4,2,0,20,22,3,2,1,0,21,20,1,0,0,0,21,22,1,0,0,0,22,3,1,0,0,0,23,
24,3,6,3,0,24,5,1,0,0,0,25,26,5,1,0,0,26,27,5,5,0,0,27,28,3,8,4,0,28,29,
5,6,0,0,29,30,5,2,0,0,30,31,5,8,0,0,31,32,3,14,7,0,32,33,5,9,0,0,33,34,5,
7,0,0,34,7,1,0,0,0,35,37,3,10,5,0,36,38,3,8,4,0,37,36,1,0,0,0,37,38,1,0,
0,0,38,41,1,0,0,0,39,41,3,12,6,0,40,35,1,0,0,0,40,39,1,0,0,0,41,9,1,0,0,
0,42,43,5,4,0,0,43,44,5,8,0,0,44,45,5,10,0,0,45,46,5,9,0,0,46,47,5,7,0,0,
47,11,1,0,0,0,48,49,5,3,0,0,49,50,5,7,0,0,50,13,1,0,0,0,51,52,5,11,0,0,52,
15,1,0,0,0,3,21,37,40];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SimpleLangParser extends antlr4.Parser {

    static grammarFileName = "SimpleLang.g4";
    static literalNames = [ null, "'do'", "'while'", "'break'", "'puts'", 
                            "'{'", "'}'", "';'", "'('", "')'" ];
    static symbolicNames = [ null, "DO", "WHILE", "BREAK", "PUTS", "LLAVE_ABIERTA", 
                             "LLAVE_CERRADA", "PUNTO_Y_COMA", "PAREN_ABIERTO", 
                             "PAREN_CERRADO", "CADENA", "NUMERO", "WS" ];
    static ruleNames = [ "programa", "instrucciones", "instruccion", "bucle", 
                         "sentencia", "salida", "terminar", "condicion" ];

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
	        this.state = 16;
	        this.instrucciones();
	        this.state = 17;
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
	        this.state = 19;
	        this.instruccion();
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 20;
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
	        this.state = 23;
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
	        this.state = 25;
	        this.match(SimpleLangParser.DO);
	        this.state = 26;
	        this.match(SimpleLangParser.LLAVE_ABIERTA);
	        this.state = 27;
	        this.sentencia();
	        this.state = 28;
	        this.match(SimpleLangParser.LLAVE_CERRADA);
	        this.state = 29;
	        this.match(SimpleLangParser.WHILE);
	        this.state = 30;
	        this.match(SimpleLangParser.PAREN_ABIERTO);
	        this.state = 31;
	        this.condicion();
	        this.state = 32;
	        this.match(SimpleLangParser.PAREN_CERRADO);
	        this.state = 33;
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
	        this.state = 40;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 35;
	            this.salida();
	            this.state = 37;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===3 || _la===4) {
	                this.state = 36;
	                this.sentencia();
	            }

	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 39;
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
	        this.state = 42;
	        this.match(SimpleLangParser.PUTS);
	        this.state = 43;
	        this.match(SimpleLangParser.PAREN_ABIERTO);
	        this.state = 44;
	        this.match(SimpleLangParser.CADENA);
	        this.state = 45;
	        this.match(SimpleLangParser.PAREN_CERRADO);
	        this.state = 46;
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
	        this.state = 48;
	        this.match(SimpleLangParser.BREAK);
	        this.state = 49;
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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(SimpleLangParser.NUMERO);
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
SimpleLangParser.DO = 1;
SimpleLangParser.WHILE = 2;
SimpleLangParser.BREAK = 3;
SimpleLangParser.PUTS = 4;
SimpleLangParser.LLAVE_ABIERTA = 5;
SimpleLangParser.LLAVE_CERRADA = 6;
SimpleLangParser.PUNTO_Y_COMA = 7;
SimpleLangParser.PAREN_ABIERTO = 8;
SimpleLangParser.PAREN_CERRADO = 9;
SimpleLangParser.CADENA = 10;
SimpleLangParser.NUMERO = 11;
SimpleLangParser.WS = 12;

SimpleLangParser.RULE_programa = 0;
SimpleLangParser.RULE_instrucciones = 1;
SimpleLangParser.RULE_instruccion = 2;
SimpleLangParser.RULE_bucle = 3;
SimpleLangParser.RULE_sentencia = 4;
SimpleLangParser.RULE_salida = 5;
SimpleLangParser.RULE_terminar = 6;
SimpleLangParser.RULE_condicion = 7;

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

	CADENA() {
	    return this.getToken(SimpleLangParser.CADENA, 0);
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

	NUMERO() {
	    return this.getToken(SimpleLangParser.NUMERO, 0);
	};

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




SimpleLangParser.ProgramaContext = ProgramaContext; 
SimpleLangParser.InstruccionesContext = InstruccionesContext; 
SimpleLangParser.InstruccionContext = InstruccionContext; 
SimpleLangParser.BucleContext = BucleContext; 
SimpleLangParser.SentenciaContext = SentenciaContext; 
SimpleLangParser.SalidaContext = SalidaContext; 
SimpleLangParser.TerminarContext = TerminarContext; 
SimpleLangParser.CondicionContext = CondicionContext; 
