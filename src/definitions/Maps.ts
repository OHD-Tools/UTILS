/**
 * All the current In-Game maps
 */
enum Maps {
  AlDhakir = 'aldhakir',
  AlDhakir_Skirmish_Abandoned = 'AlDhakir_Skirmish_Abandoned',
  AlDhakir_Skirmish_DesertSettlement = 'AlDhakir_Skirmish_DesertSettlement',
  AlDhakir_Skirmish_WadiFarmstead = 'AlDhakir_Skirmish_WadiFarmstead',

  /**A Middle Eastern Map based on Fallujah.
   *
   * Factions: PMC vs Insurgents.
   *
   * ERA: Modern
   */
  Risala = 'risala',
  Risala_Skirmish_Highway = 'Risala_Skirmish_Highway',
  Risala_Skirmish_Shipyard = 'Risala_Skirmish_Shipyard',

  /**The Battle of Khafji was the first major ground engagement of the Gulf War.
   * It took place in and around the Saudi Arabian city of Khafji, from 29 January to 1 February 1991 and marked the culmination of the Coalition's air campaign over Kuwait and Iraq,
   * which had begun on 17 January 1991.
   *
   * Factions: PMC vs Insurgents.
   *
   * ERA: Cold War
   */
  Khafji = 'khafji',
  Khafji_Skirmish_ConstructionSite = 'Khafji_Skirmish_ConstructionSite',
  Khafji_Skirmish_IndustrialSector = 'Khafji_Skirmish_IndustrialSector',

  /**
   * Fill out
   */
  Jaziira = 'jaziira',
  Jaziira_Skirmish_City = 'Jaziira_Skirmish_City',

  /**A Vietnam Map.
   *
   * Factions: USA vs NVA.
   *
   * ERA: Vietnam War
   */
  LamDong = 'lamdong',
  LamDong_Skirmish_Jungle = 'LamDong_Skirmish_Jungle',
  LamDong_Skirmish_Outpost = 'LamDong_Skirmish_Outpost',
  LamDong_Skirmish_RiceFields = 'LamDong_Skirmish_RiceFields',
  LamDong_Skirmish_Village = 'LamDong_Skirmish_Village',

  /** Tân Bình is an urban district of Ho Chi Minh City, Vietnam. The city's international airport is situated in the district.
   *
   * Factions: USA vs NVA
   *
   * ERA: Vietnam War
   */
  TanBinh = 'tanbinh',
  TanBinh_Skirmish_ScorchedFields = 'TanBinh_Skirmish_ScorchedFields',

  /** The Battle of Monte Cassino, was a series of four assaults made by the Allies against German forces in Italy during the Italian Campaign of World War II.
   * The objective was to break through the Winter Line, and facilitate an advance towards Rome.
   *
   * Factions: USA vs GERMANY
   *
   * ERA: WW2
   */
  MonteCassino = 'montecassino',
  Montecassino_Skirmish_Castle = 'Montecassino_Skirmish_Castle',
  Montecassino_Skirmish_Villa = 'Montecassino_Skirmish_Villa',

  /**Omaha Beach was one of five beach landing sectors of the amphibious assault component of Operation Overlord during the Second World War.
   *
   * Factions: USA vs GERMANY
   *
   * ERA: WW2
   */
  OmahaBeach = 'omahabeach',
  OmahaBeach_Skirmish_Beachhead = 'OmahaBeach_Skirmish_Beachhead',
  OmahaBeach_Skirmish_Town = 'OmahaBeach_Skirmish_Town',

  /**The Battle of Carentan was an engagement in World War II between airborne forces of the United States Army and the German Wehrmacht during the Battle of Normandy.
   *
   * Factions: USA vs WEHRMACHT (Germany)
   *
   * ERA: WW2
   */
  Carentan = 'carentan',
  Carentan_Skirmish_Church = 'Carentan_Skirmish_Church',

  /**The Meuse River-Argonne Forest offensive along the Western Front.
   *
   * Factions: USA vs GERMANY
   *
   * ERA: WW1
   */
  Argonne = 'argonne',
  Argonne_Skirmish_Bunker = 'Argonne_Skirmish_Bunker',
  Argonne_Skirmish_EastTrenches = 'Argonne_Skirmish_EastTrenches',
  Argonne_Skirmish_Ruins = 'Argonne_Skirmish_Ruins',
  Argonne_Skirmish_WestTrenches = 'Argonne_Skirmish_WestTrenches',
  /**
   *
   */
  SaintQuentin = 'saintquentin',
  SaintQuentin_Skirmish_NoMansLand = 'SaintQuentin_Skirmish_NoMansLand',
  /**
   *
   */
  TrainingGrouds_Skirmish_Killhouse = 'TrainingGrouds_Skirmish_Killhouse',
  TrainingGrouds_Skirmish_UrbanComplex = 'TrainingGrouds_Skirmish_UrbanComplex',
}
export default Maps;
