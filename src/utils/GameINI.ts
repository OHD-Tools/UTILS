import { stringify, parse } from 'ini';

type IniBoolean = 'True' | 'False';
type IniNumber = `${number}`;
type IniString = string;
export interface IGameIni {
  RCON_Enabled: boolean;
  RCON_ListenAddress: string;
  RCON_ListenPort: number;
  RCON_Password: string;
  RCON_MaxActiveConnections: number;
  RCON_MaxAuthAttempts: number;

  GameSession_MaxPlayers: number;
  GameSession_MinPlayers: number;
  GameSession_ServerName: string;
  GameSession_Password: string;
  GameSession_SupportersOnlyWhitelist: boolean;

  Gamemode_BotAutofill: boolean;
  Gamemode_WarmupTime: number;
  Gamemode_RoundTimeLimit: number;
  Gamemode_RoundScoreLimit: number;
  Gamemode_TimeBetweenMatches: number;
  Gamemode_BalanceTeams: boolean;
  Gamemode_BalanceTimerInterval: number;
  Gamemode_AutoAssignHumanTeam: number;
  Gamemode_AllowVoting: boolean;
  Gamemode_AllowedVoteIssues: string;
  Gamemode_RandomPlayerTeamBalance: boolean;

  Voting_BanDuration: number;
  Voting_PassRatio: number;
  Voting_Duration: number;
  Voting_PassedVoteCooldown: number;
  Voting_FailedVoteCooldown: number;
  Voting_DenyVACBannedUsersFromVoting: boolean;
  Voting_DisableVACBanCheckWhileAdminIsOnline: boolean;
  Voting_OnlyAdminsCanInitiateVote: boolean;

  // AccessControl_;
  // AccessControl_;
  // AccessControl_;
  // AccessControl_;
  // AccessControl_;
  // AccessControl_;
  // AccessControl_;
  // AccessControl_;
  // AccessControl_;
  // AccessControl_;
  // AccessControl_;
}
type GameIniRawContents = {
  ['/Script/RCON']: {
    RCONServerSystem: {
      bEnabled: IniBoolean;
      ListenAddress: IniString;
      ListenPort: IniNumber;
      Password: IniString;
      MaxActiveConnections: IniNumber;
      MaxAuthAttempts: IniNumber;
    };
  };
  ['/Script/Engine']: {
    GameSession: {
      MaxPlayers: IniNumber;
    };
  };
  ['/Script/DonkehFramework']: {
    DFGameSession: {
      MinPlayers: IniNumber;
      ServerName: IniString;
      Password: IniString;
    };
    DFBaseGameMode: {
      bBotAutofill: IniBoolean;
      WarmupTime: IniNumber;
      RoundTimeLimit: IniNumber;
      RoundScoreLimit: IniNumber;
      TimeBetweenMatches: IniNumber;
      bBalanceTeams: IniBoolean;
      BalanceTimerInterval: IniNumber;
      AutoAssignHumanTeam: IniNumber;
      bAllowVoting: IniBoolean;
      AllowedVoteIssues: IniString;
    };
    DFVoteIssuePlayerKick: {
      BanDuration: IniNumber;
      PassRatio: IniNumber;
      Duration: IniNumber;
      PassedVoteCooldown: IniNumber;
      FailedVoteCooldown: IniNumber;
      bDenyVACBannedUsersFromVoting: IniBoolean;
      bDisableVACBanCheckWhileAdminIsOnline: IniBoolean;
      bOnlyAdminsCanInitiateVote: IniBoolean;
    };
  };
  ['/Script/HDMain']: {
    HDGameSession: {
      bSupportersOnlyWhitelist: IniBoolean;
    };
    HDBaseGameMode: {
      bRandomPlayerTeamBalance: IniBoolean;
    };
  };
  ['AccessControlSteam']: {
    bDenyVACBannedUsers: IniBoolean;
    bDenyGameBannedUsers: IniBoolean;
    bDenyCommunityBannedUsers: IniBoolean;
    bDenyUsersWithPrivateProfiles: IniBoolean;
    NumVACBansAllowed: IniNumber;
    NumGameBansAllowed: IniNumber;
    NumBanAgeDaysAllowed: IniNumber;
    MinRequiredAccountAgeDays: IniNumber;
    MinRequiredAccountPlaytimeHours: IniNumber;
    MaxLoginQueryCacheAgeMinutes: IniNumber;
  };
};
const gameIniDefault: IGameIni = {
  RCON_Enabled: false,
  RCON_ListenAddress: '',
  RCON_ListenPort: 7779,
  RCON_Password: '',
  RCON_MaxActiveConnections: 5,
  RCON_MaxAuthAttempts: 3,

  GameSession_MaxPlayers: 16,
  GameSession_MinPlayers: 1,
  GameSession_ServerName: '',
  GameSession_Password: '',
  GameSession_SupportersOnlyWhitelist: false,

  Gamemode_BotAutofill: false,
  Gamemode_WarmupTime: 0,
  Gamemode_RoundTimeLimit: 0,
  Gamemode_RoundScoreLimit: 0,
  Gamemode_TimeBetweenMatches: 10,
  Gamemode_BalanceTeams: true,
  Gamemode_BalanceTimerInterval: 60.0,
  Gamemode_AutoAssignHumanTeam: 255,
  Gamemode_AllowVoting: false,
  Gamemode_AllowedVoteIssues: '/Script/DonkehFramework.DFVoteIssuePlayerKick',
  Gamemode_RandomPlayerTeamBalance: false,

  Voting_BanDuration: 300.0,
  Voting_PassRatio: 0.51,
  Voting_Duration: 0,
  Voting_PassedVoteCooldown: 0,
  Voting_FailedVoteCooldown: 0,
  Voting_DenyVACBannedUsersFromVoting: false,
  Voting_DisableVACBanCheckWhileAdminIsOnline: false,
  Voting_OnlyAdminsCanInitiateVote: false,
};

const toBoolean = (b: boolean): IniBoolean => (b ? 'True' : 'False');
const toNumber = (n: number): IniNumber => `${n}`;
const toString = (s: string): IniString => s;

export class GameINI {
  public Settings!: IGameIni;
  constructor(settings: Partial<IGameIni> | string = {} as IGameIni) {
    if (typeof settings == 'string') return GameINI.parse(settings);
    this.Settings = { ...gameIniDefault, ...settings };
  }

  public static parse(fileContent: string): GameINI {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const config: IGameIni = {} as IGameIni;
    const raw = parse(fileContent) as GameIniRawContents;
    return new GameINI(raw as unknown as IGameIni);
  }

  public toString() {
    const s = this.Settings;
    const fileRaw: GameIniRawContents = {
      '/Script/RCON': {
        RCONServerSystem: {
          bEnabled: toBoolean(s.RCON_Enabled),
          ListenAddress: toString(s.RCON_ListenAddress),
          ListenPort: toNumber(s.RCON_ListenPort),
          Password: toString(s.RCON_Password),
          MaxActiveConnections: toNumber(s.RCON_MaxActiveConnections),
          MaxAuthAttempts: toNumber(s.RCON_MaxAuthAttempts),
        },
      },
      '/Script/Engine': {
        GameSession: {
          MaxPlayers: toNumber(s.GameSession_MaxPlayers),
        },
      },
      '/Script/DonkehFramework': {
        DFGameSession: {
          MinPlayers: toNumber(s.GameSession_MinPlayers),
          ServerName: toString(s.GameSession_ServerName),
          Password: toString(s.GameSession_Password),
        },
        DFBaseGameMode: {
          bBotAutofill: toBoolean(s.Gamemode_BotAutofill),
          WarmupTime: toNumber(s.Gamemode_WarmupTime),
          RoundTimeLimit: toNumber(s.Gamemode_RoundTimeLimit),
          RoundScoreLimit: toNumber(s.Gamemode_RoundScoreLimit),
          TimeBetweenMatches: toNumber(s.Gamemode_TimeBetweenMatches),
          bBalanceTeams: toBoolean(s.Gamemode_BalanceTeams),
          BalanceTimerInterval: toNumber(s.Gamemode_BalanceTimerInterval),
          AutoAssignHumanTeam: toNumber(s.Gamemode_AutoAssignHumanTeam),
          bAllowVoting: toBoolean(s.Gamemode_AllowVoting),
          AllowedVoteIssues: toString(s.Gamemode_AllowedVoteIssues),
        },
        DFVoteIssuePlayerKick: {
          BanDuration: toNumber(s.Voting_BanDuration),
          PassRatio: toNumber(s.Voting_PassRatio),
          Duration: toNumber(s.Voting_Duration),
          PassedVoteCooldown: toNumber(s.Voting_PassedVoteCooldown),
          FailedVoteCooldown: toNumber(s.Voting_FailedVoteCooldown),
          bDenyVACBannedUsersFromVoting: toBoolean(
            s.Voting_DenyVACBannedUsersFromVoting,
          ),
          bDisableVACBanCheckWhileAdminIsOnline: toBoolean(
            s.Voting_DisableVACBanCheckWhileAdminIsOnline,
          ),
          bOnlyAdminsCanInitiateVote: toBoolean(
            s.Voting_OnlyAdminsCanInitiateVote,
          ),
        },
      },
      '/Script/HDMain': {
        HDGameSession: {
          bSupportersOnlyWhitelist: 'True',
        },
        HDBaseGameMode: {
          bRandomPlayerTeamBalance: 'True',
        },
      },
      AccessControlSteam: {
        bDenyVACBannedUsers: 'True',
        bDenyGameBannedUsers: 'True',
        bDenyCommunityBannedUsers: 'True',
        bDenyUsersWithPrivateProfiles: 'True',
        NumVACBansAllowed: '-1',
        NumGameBansAllowed: '-1',
        NumBanAgeDaysAllowed: '-1',
        MinRequiredAccountAgeDays: '-1',
        MinRequiredAccountPlaytimeHours: '-1',
        MaxLoginQueryCacheAgeMinutes: '-1',
      },
    };
    return stringify(fileRaw, { sort: true });
  }
}
