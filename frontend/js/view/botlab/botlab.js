/**
 * This file is part of yaBotGame.
 * Please check the file LICENSE.md for information about the license.
 *
 * @copyright Markus Riegert 2014
 * @author Markus Riegert <desmodul@drow-land.de>
 */

function generateBotLabTabPanel()
{
    /**var botLabTabPanel = new TabPage("BotLab", null, null, 1280, 1024);
    botLabTabPanel.addToPanel(generateNorthToolbarPanel());
    botLabTabPanel.addToPanel(generateClearFixElement());
    botLabTabPanel.addToPanel(createImage("img/botlab.png", 804, 747));
    return botLabTabPanel.tabPage;
    */


    var battlefieldTabPanel = generateTabPanelDiv("BotLab", "botLabTabPanel", null, 1280, 1024);
    addElementToComponent(battlefieldTabPanel, createImage("img/botlab.png", 804, 747));
    return battlefieldTabPanel;
}
