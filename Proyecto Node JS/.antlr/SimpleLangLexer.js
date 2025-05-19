// Generated from SimpleLang.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,16,82,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,3,
1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,
1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,4,
15,77,8,15,11,15,12,15,78,1,15,1,15,0,0,16,1,1,3,2,5,3,7,4,9,5,11,6,13,7,
15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,1,0,4,2,0,65,90,97,122,
1,0,48,57,5,0,33,33,44,44,46,46,58,59,63,63,3,0,9,10,13,13,32,32,82,0,1,
1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,
1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,
0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,1,33,1,0,0,0,3,35,1,
0,0,0,5,37,1,0,0,0,7,40,1,0,0,0,9,46,1,0,0,0,11,52,1,0,0,0,13,57,1,0,0,0,
15,59,1,0,0,0,17,61,1,0,0,0,19,63,1,0,0,0,21,65,1,0,0,0,23,67,1,0,0,0,25,
69,1,0,0,0,27,71,1,0,0,0,29,73,1,0,0,0,31,76,1,0,0,0,33,34,5,48,0,0,34,2,
1,0,0,0,35,36,5,49,0,0,36,4,1,0,0,0,37,38,5,100,0,0,38,39,5,111,0,0,39,6,
1,0,0,0,40,41,5,119,0,0,41,42,5,104,0,0,42,43,5,105,0,0,43,44,5,108,0,0,
44,45,5,101,0,0,45,8,1,0,0,0,46,47,5,98,0,0,47,48,5,114,0,0,48,49,5,101,
0,0,49,50,5,97,0,0,50,51,5,107,0,0,51,10,1,0,0,0,52,53,5,112,0,0,53,54,5,
117,0,0,54,55,5,116,0,0,55,56,5,115,0,0,56,12,1,0,0,0,57,58,5,123,0,0,58,
14,1,0,0,0,59,60,5,125,0,0,60,16,1,0,0,0,61,62,5,59,0,0,62,18,1,0,0,0,63,
64,5,40,0,0,64,20,1,0,0,0,65,66,5,41,0,0,66,22,1,0,0,0,67,68,5,34,0,0,68,
24,1,0,0,0,69,70,7,0,0,0,70,26,1,0,0,0,71,72,7,1,0,0,72,28,1,0,0,0,73,74,
7,2,0,0,74,30,1,0,0,0,75,77,7,3,0,0,76,75,1,0,0,0,77,78,1,0,0,0,78,76,1,
0,0,0,78,79,1,0,0,0,79,80,1,0,0,0,80,81,6,15,0,0,81,32,1,0,0,0,2,0,78,1,
6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class SimpleLangLexer extends antlr4.Lexer {

    static grammarFileName = "SimpleLang.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'0'", "'1'", "'do'", "'while'", "'break'", 
                         "'puts'", "'{'", "'}'", "';'", "'('", "')'", "'\"'" ];
	static symbolicNames = [ null, null, null, "DO", "WHILE", "BREAK", "PUTS", 
                          "LLAVE_ABIERTA", "LLAVE_CERRADA", "PUNTO_Y_COMA", 
                          "PAREN_ABIERTO", "PAREN_CERRADO", "COMILLA", "LETRA", 
                          "DIGITO", "SIMBOLO", "WS" ];
	static ruleNames = [ "T__0", "T__1", "DO", "WHILE", "BREAK", "PUTS", "LLAVE_ABIERTA", 
                      "LLAVE_CERRADA", "PUNTO_Y_COMA", "PAREN_ABIERTO", 
                      "PAREN_CERRADO", "COMILLA", "LETRA", "DIGITO", "SIMBOLO", 
                      "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

SimpleLangLexer.EOF = antlr4.Token.EOF;
SimpleLangLexer.T__0 = 1;
SimpleLangLexer.T__1 = 2;
SimpleLangLexer.DO = 3;
SimpleLangLexer.WHILE = 4;
SimpleLangLexer.BREAK = 5;
SimpleLangLexer.PUTS = 6;
SimpleLangLexer.LLAVE_ABIERTA = 7;
SimpleLangLexer.LLAVE_CERRADA = 8;
SimpleLangLexer.PUNTO_Y_COMA = 9;
SimpleLangLexer.PAREN_ABIERTO = 10;
SimpleLangLexer.PAREN_CERRADO = 11;
SimpleLangLexer.COMILLA = 12;
SimpleLangLexer.LETRA = 13;
SimpleLangLexer.DIGITO = 14;
SimpleLangLexer.SIMBOLO = 15;
SimpleLangLexer.WS = 16;



