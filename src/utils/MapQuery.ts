import Maps from '../definitions/Maps';
import Factions from '../definitions/Factions';

export type MapQueryProps = {
  Map: Maps;
  Game: string | null;
  BluforFaction: string;
  OpforFaction: string;
  MinPlayers: number;
  MaxPlayers: number;
  AutoFillHuman: null | 0 | 1;
  bDisableKitRestrictions: boolean;
  bBotAutofill: boolean;
  BluforNumBots: number;
  OpforNumBots: number;
  BluforNumTickets: number;
  OpforNumTickets: number;
};

/**
 * Builder for OHD Map Strings
 */
export default class MapQuery {
  /**What map to set the server to */
  public Map: MapQueryProps['Map'];
  /**Exclusive to Modded Gamemodes */
  public Game: MapQueryProps['Game'];
  /**Blue Team Faction */
  public BluforFaction: MapQueryProps['BluforFaction'];
  /**Red Team Faction*/
  public OpforFaction: MapQueryProps['OpforFaction'];
  /**Minimum number of players to start a game. If bBotAutofill is enables, bots will spawn to this point */
  public MinPlayers: MapQueryProps['MinPlayers'];
  /**Max number of players */
  public MaxPlayers: MapQueryProps['MaxPlayers'];
  /**Allow All players to choose all kits, without limitation */
  public bDisableKitRestrictions: MapQueryProps['bDisableKitRestrictions'];
  /**Auto fill the server with bots up to MinPlayers */
  public bBotAutofill: MapQueryProps['bBotAutofill'];
  /**How many bots should the Blue Team have */
  public BluforNumBots: MapQueryProps['BluforNumBots'];
  /**How many bots should the Red Team have */
  public OpforNumBots: MapQueryProps['OpforNumBots'];
  /**How many Reinforcements should the Blue Team have */
  public BluforNumTickets: MapQueryProps['BluforNumTickets'];
  /**How many Reinforcements should the Red Team have */
  public OpforNumTickets: MapQueryProps['OpforNumTickets'];
  /**What Team to force players to. */
  public AutoFillHuman: MapQueryProps['AutoFillHuman'];

  constructor($b: Partial<MapQueryProps> = {}) {
    if (typeof $b === 'string') {
      $b = MapQuery.parse($b);
    }
    this.Map = $b.Map ?? Maps.Argonne;
    this.Game = $b.Game ?? null;
    this.BluforFaction = $b.BluforFaction ?? Factions.DEFAULT;
    this.OpforFaction = $b.OpforFaction ?? Factions.DEFAULT;
    this.MinPlayers = $b.MinPlayers ?? 1;
    this.MaxPlayers = $b.MaxPlayers ?? 64;
    this.bDisableKitRestrictions = $b.bDisableKitRestrictions ?? false;
    this.bBotAutofill = $b.bBotAutofill ?? false;
    this.AutoFillHuman = $b.AutoFillHuman ?? null;
    this.BluforNumBots = $b.BluforNumBots ?? 0;
    this.OpforNumBots = $b.OpforNumBots ?? 0;
    this.BluforNumTickets = $b.BluforNumTickets ?? 500;
    this.OpforNumTickets = $b.OpforNumTickets ?? 500;
  }

  static parse(query: string): Partial<MapQueryProps> {
    const map = /^(\w+)/gi.exec(query)?.[1];
    const parsed = new Map<string, string>();
    for (const [k, v] of new URLSearchParams(
      query.slice(query.indexOf('?') + 1),
    )) {
      parsed.set(k.toLowerCase(), v);
    }
    const mapQueryData: Partial<MapQueryProps> = {};

    const BluforFaction = parsed.get('bluforfaction') as string;
    const OpforFaction = parsed.get('opforfaction') as string;
    const Game = parsed.get('game') as string;
    const MinPlayers = parsed.get('minplayers') as string;
    const MaxPlayers = parsed.get('maxplayers') as string;
    const bDisableKitRestrictions = parsed.get(
      'bdisablekitrestrictions',
    ) as string;
    const bBotAutofill = parsed.get('bbotautofill') as string;
    const BluforNumBots = parsed.get('blufornumbots') as string;
    const OpforNumBots = parsed.get('opfornumbots') as string;
    const BluforNumTickets = parsed.get('blufornumtickets') as string;
    const OpforNumTickets = parsed.get('opfornumtickets') as string;
    const AutoFillHuman = parsed.get('autofillhuman') as string;
    mapQueryData.Map = map as Maps;
    mapQueryData.Game = Game;
    mapQueryData.BluforFaction = BluforFaction;
    mapQueryData.OpforFaction = OpforFaction;
    mapQueryData.MinPlayers =
      MinPlayers != null ? parseInt(MinPlayers) : undefined;
    mapQueryData.MaxPlayers =
      MaxPlayers != null ? parseInt(MaxPlayers) : undefined;
    mapQueryData.bDisableKitRestrictions = bDisableKitRestrictions != null;
    mapQueryData.bBotAutofill = bBotAutofill != null;
    mapQueryData.BluforNumBots =
      BluforNumBots != null ? parseInt(BluforNumBots) : undefined;
    mapQueryData.OpforNumBots =
      OpforNumBots != null ? parseInt(OpforNumBots) : undefined;
    mapQueryData.BluforNumTickets =
      BluforNumTickets != null ? parseInt(BluforNumTickets) : undefined;
    mapQueryData.OpforNumTickets =
      OpforNumTickets != null ? parseInt(OpforNumTickets) : undefined;
    mapQueryData.AutoFillHuman =
      AutoFillHuman != null ? (parseInt(AutoFillHuman) as 0) : undefined;
    return new MapQuery(mapQueryData);
  }
  /**
   * Generate the Level String
   */
  toString(): string {
    let map = '';
    map += this.Map;
    if (this.Game != null) map += `?game=${this.Game}`;
    if (this.BluforFaction != null)
      map += `?BluforFaction=${this.BluforFaction}`;
    if (this.OpforFaction != null) map += `?OpforFaction=${this.OpforFaction}`;
    if (this.MinPlayers != null) map += `?MinPLayers=${this.MinPlayers}`;
    if (this.MaxPlayers != null) map += `?MaxPlayers=${this.MaxPlayers}`;
    if (this.bDisableKitRestrictions == true) map += `?bDisableKitRestrictions`;
    if (this.bBotAutofill == true) map += `?bBotAutofill`;
    if (this.BluforNumBots != null)
      map += `?BluforNumBots=${this.BluforNumBots}`;
    if (this.AutoFillHuman != null)
      map += `?AutoFillHuman=${this.AutoFillHuman}`;
    if (this.OpforNumBots != null) map += `?OpforNumBots=${this.OpforNumBots}`;
    if (this.BluforNumTickets != null)
      map += `?BluforNumTickets=${this.BluforNumTickets}`;
    if (this.OpforNumTickets != null)
      map += `?OpforNumTickets=${this.OpforNumTickets}`;
    return map;
  }
}
