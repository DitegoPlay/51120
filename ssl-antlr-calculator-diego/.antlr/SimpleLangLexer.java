// Generated from c://Users//Diego Torres//Desktop//SINTAXIS//Diego//ssl-antlr-calculator//SimpleLang.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class SimpleLangLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		DO=1, WHILE=2, BREAK=3, PUTS=4, LLAVE_ABIERTA=5, LLAVE_CERRADA=6, PUNTO_Y_COMA=7, 
		PAREN_ABIERTO=8, PAREN_CERRADO=9, CADENA=10, NUMERO=11, WS=12;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"DO", "WHILE", "BREAK", "PUTS", "LLAVE_ABIERTA", "LLAVE_CERRADA", "PUNTO_Y_COMA", 
			"PAREN_ABIERTO", "PAREN_CERRADO", "CADENA", "NUMERO", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'do'", "'while'", "'break'", "'puts'", "'{'", "'}'", "';'", "'('", 
			"')'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "DO", "WHILE", "BREAK", "PUTS", "LLAVE_ABIERTA", "LLAVE_CERRADA", 
			"PUNTO_Y_COMA", "PAREN_ABIERTO", "PAREN_CERRADO", "CADENA", "NUMERO", 
			"WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public SimpleLangLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "SimpleLang.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\fN\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005"+
		"\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001"+
		"\b\u0001\t\u0001\t\u0001\t\u0001\t\u0005\t<\b\t\n\t\f\t?\t\t\u0001\t\u0001"+
		"\t\u0001\n\u0004\nD\b\n\u000b\n\f\nE\u0001\u000b\u0004\u000bI\b\u000b"+
		"\u000b\u000b\f\u000bJ\u0001\u000b\u0001\u000b\u0000\u0000\f\u0001\u0001"+
		"\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f"+
		"\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0001\u0000\u0003\u0002\u0000\""+
		"\"\\\\\u0001\u000009\u0003\u0000\t\n\r\r  Q\u0000\u0001\u0001\u0000\u0000"+
		"\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000"+
		"\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000"+
		"\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000"+
		"\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000"+
		"\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000"+
		"\u0017\u0001\u0000\u0000\u0000\u0001\u0019\u0001\u0000\u0000\u0000\u0003"+
		"\u001c\u0001\u0000\u0000\u0000\u0005\"\u0001\u0000\u0000\u0000\u0007("+
		"\u0001\u0000\u0000\u0000\t-\u0001\u0000\u0000\u0000\u000b/\u0001\u0000"+
		"\u0000\u0000\r1\u0001\u0000\u0000\u0000\u000f3\u0001\u0000\u0000\u0000"+
		"\u00115\u0001\u0000\u0000\u0000\u00137\u0001\u0000\u0000\u0000\u0015C"+
		"\u0001\u0000\u0000\u0000\u0017H\u0001\u0000\u0000\u0000\u0019\u001a\u0005"+
		"d\u0000\u0000\u001a\u001b\u0005o\u0000\u0000\u001b\u0002\u0001\u0000\u0000"+
		"\u0000\u001c\u001d\u0005w\u0000\u0000\u001d\u001e\u0005h\u0000\u0000\u001e"+
		"\u001f\u0005i\u0000\u0000\u001f \u0005l\u0000\u0000 !\u0005e\u0000\u0000"+
		"!\u0004\u0001\u0000\u0000\u0000\"#\u0005b\u0000\u0000#$\u0005r\u0000\u0000"+
		"$%\u0005e\u0000\u0000%&\u0005a\u0000\u0000&\'\u0005k\u0000\u0000\'\u0006"+
		"\u0001\u0000\u0000\u0000()\u0005p\u0000\u0000)*\u0005u\u0000\u0000*+\u0005"+
		"t\u0000\u0000+,\u0005s\u0000\u0000,\b\u0001\u0000\u0000\u0000-.\u0005"+
		"{\u0000\u0000.\n\u0001\u0000\u0000\u0000/0\u0005}\u0000\u00000\f\u0001"+
		"\u0000\u0000\u000012\u0005;\u0000\u00002\u000e\u0001\u0000\u0000\u0000"+
		"34\u0005(\u0000\u00004\u0010\u0001\u0000\u0000\u000056\u0005)\u0000\u0000"+
		"6\u0012\u0001\u0000\u0000\u00007=\u0005\"\u0000\u00008<\b\u0000\u0000"+
		"\u00009:\u0005\\\u0000\u0000:<\t\u0000\u0000\u0000;8\u0001\u0000\u0000"+
		"\u0000;9\u0001\u0000\u0000\u0000<?\u0001\u0000\u0000\u0000=;\u0001\u0000"+
		"\u0000\u0000=>\u0001\u0000\u0000\u0000>@\u0001\u0000\u0000\u0000?=\u0001"+
		"\u0000\u0000\u0000@A\u0005\"\u0000\u0000A\u0014\u0001\u0000\u0000\u0000"+
		"BD\u0007\u0001\u0000\u0000CB\u0001\u0000\u0000\u0000DE\u0001\u0000\u0000"+
		"\u0000EC\u0001\u0000\u0000\u0000EF\u0001\u0000\u0000\u0000F\u0016\u0001"+
		"\u0000\u0000\u0000GI\u0007\u0002\u0000\u0000HG\u0001\u0000\u0000\u0000"+
		"IJ\u0001\u0000\u0000\u0000JH\u0001\u0000\u0000\u0000JK\u0001\u0000\u0000"+
		"\u0000KL\u0001\u0000\u0000\u0000LM\u0006\u000b\u0000\u0000M\u0018\u0001"+
		"\u0000\u0000\u0000\u0005\u0000;=EJ\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}