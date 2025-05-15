// Generated from c://Users//Diego Torres//Desktop//SINTAXIS//Diego//ssl-antlr-calculator//SimpleLang.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link SimpleLangParser}.
 */
public interface SimpleLangListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link SimpleLangParser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(SimpleLangParser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleLangParser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(SimpleLangParser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleLangParser#instrucciones}.
	 * @param ctx the parse tree
	 */
	void enterInstrucciones(SimpleLangParser.InstruccionesContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleLangParser#instrucciones}.
	 * @param ctx the parse tree
	 */
	void exitInstrucciones(SimpleLangParser.InstruccionesContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleLangParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void enterInstruccion(SimpleLangParser.InstruccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleLangParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void exitInstruccion(SimpleLangParser.InstruccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleLangParser#bucle}.
	 * @param ctx the parse tree
	 */
	void enterBucle(SimpleLangParser.BucleContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleLangParser#bucle}.
	 * @param ctx the parse tree
	 */
	void exitBucle(SimpleLangParser.BucleContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleLangParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void enterSentencia(SimpleLangParser.SentenciaContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleLangParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void exitSentencia(SimpleLangParser.SentenciaContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleLangParser#salida}.
	 * @param ctx the parse tree
	 */
	void enterSalida(SimpleLangParser.SalidaContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleLangParser#salida}.
	 * @param ctx the parse tree
	 */
	void exitSalida(SimpleLangParser.SalidaContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleLangParser#terminar}.
	 * @param ctx the parse tree
	 */
	void enterTerminar(SimpleLangParser.TerminarContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleLangParser#terminar}.
	 * @param ctx the parse tree
	 */
	void exitTerminar(SimpleLangParser.TerminarContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleLangParser#condicion}.
	 * @param ctx the parse tree
	 */
	void enterCondicion(SimpleLangParser.CondicionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleLangParser#condicion}.
	 * @param ctx the parse tree
	 */
	void exitCondicion(SimpleLangParser.CondicionContext ctx);
}