/*=============================================================================
 ${NAME}.js
----------------------------------------------------------------------------
 (C)${YEAR} Triacontane
 This software is released under the MIT License.
 http://opensource.org/licenses/mit-license.php
----------------------------------------------------------------------------
 Version
 1.0.0 ${DATE} 初版
----------------------------------------------------------------------------
 [Blog]   : https://triacontane.blogspot.jp/
 [Twitter]: https://twitter.com/triacontane/
 [GitHub] : https://github.com/triacontane/
=============================================================================*/

/*:
 * @plugindesc ${NAME}プラグイン
 * @target MZ
 * @url https://github.com/triacontane/RPGMakerMV/tree/mz_master/${NAME}.js
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 * @author トリアコンタン
 *
 * @param param
 * @text パラメータ名称
 * @desc パラメータ説明
 * @default
 * @type struct<TEST>[]
 *
 * @command command
 * @text コマンド名称
 * @desc コマンド説明
 *
 * @arg arg
 * @text 引数名称
 * @desc 引数説明
 * @default
 * @type number
 *
 * @help ${NAME}.js
 *　
 * このプラグインの利用にはベースプラグイン『PluginCommonBase.js』が必要です。
 * 『PluginCommonBase.js』は、RPGツクールMZのインストールフォルダ配下の
 * 以下のフォルダに格納されています。
 * dlc/BasicResources/plugins/official
 *
 * 利用規約：
 *  作者に無断で改変、再配布が可能で、利用形態（商用、18禁利用等）
 *  についても制限はありません。
 *  このプラグインはもうあなたのものです。
 */

/*~struct~TEST:
 * @param name
 * @desc ファイル名称です。
 * @default
 * @require 1
 * @dir audio/se/
 * @type file
 */

(()=> {
    'use strict';
    const script = document.currentScript;
    const param = PluginManagerEx.createParameter(script);

    PluginManagerEx.registerCommand(script, 'command', args => {

    });
})();
