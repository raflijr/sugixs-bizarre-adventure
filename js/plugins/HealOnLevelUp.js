//=============================================================================
// Heal on Level Up
// by Shaz
// Last Update: 2015.10.25
//=============================================================================

/*:
 * @plugindesc Allows you to heal actors on level up
 * @author Shaz
 *
 * @param All HP
 * @desc Heal HP for all party members (Y/N)
 * @default Y
 *
 * @param All MP
 * @desc Heal MP for all party members (Y/N)
 * @default Y
 *
 * @param All States
 * @desc Remove states for all party members (Y/N)
 * @default Y
 *
 * @help This plugin does not provide plugin commands
 *
 * If you only want to set SOME actors to have the above properties, add
 * the following tags to the actor notebox:
 * <LUHealHP>
 * <LUHealMP>
 * <LUHealStates>
 */

(function() {

  var parameters = PluginManager.parameters('HealOnLevelUp');
  var healHP = (parameters['All HP'].toUpperCase() || '') === 'Y';
  var healMP = (parameters['All MP'].toUpperCase() || '') === 'Y';
  var healStates = (parameters['All States'].toUpperCase() || '') === 'Y';

  var _Game_Actor_levelUp = Game_Actor.prototype.levelUp;
  Game_Actor.prototype.levelUp = function() {
    _Game_Actor_levelUp.call(this);

    if (healHP || this.actor().meta.LUHealHP) {
      this._hp = this.mhp;
    }

    if (healMP || this.actor().meta.LUHealMP) {
      this._mp = this.mmp;
    }

    if (healStates || this.actor().meta.LUHealStates) {
      this.clearStates();
    }
  };


})();