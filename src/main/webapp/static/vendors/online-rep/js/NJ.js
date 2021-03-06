(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([ 'exports', 'echarts' ], factory);
	} else if (typeof exports === 'object'
			&& typeof exports.nodeName !== 'string') {
		factory(exports, require('echarts'));
	} else {
		factory({}, root.echarts);
	}
}
		(
				this,
				function(exports, echarts) {
					var log = function(msg) {
						if (typeof console !== 'undefined') {
							console && console.error && console.error(msg);
						}
					};
					if (!echarts) {
						log('ECharts is not Loaded');
						return;
					}
					if (!echarts.registerMap) {
						log('ECharts Map is not loaded');
						return;
					}
					echarts
							.registerMap(
									'nanjing',
									{
										"type" : "FeatureCollection",
										"features" : [
												{
													"type" : "Feature",
													"id" : "320111",
													"properties" : {
														"name" : "浦口区",
														"cp" : [ 118.628003,
																32.058903 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@KSAE@BCBA@EAEBIBKFKFGBABADABABABEBABBD@@@D@B@BAB@B@DBBBDBBB@BB@BBBBB@B@B@BABCBA@EBC@CBE@KDA@ABABCBA@CBC@ABABCFC@OFSHA@ABEBABABCFABA@CD@BCBABCBCBA@C@C@@AIBE@C@IHADA@AFCBABEDCBC@CBA@ABAB@B@B@DBDBBBBBDBBBB@B@DAD@D@B@B@D@B@DBBDD@BBBDD@BDBBBB@BBBB@D@DADABABADAB@B@@@BBBD@@@D@FBB@B@D@BBBBBDBF@F@@@D@B@DA@@B@@AB@B@B@@@@@BBB@B@B@B@B@B@B@B@B@@ABB@@B@BBB@@BB@@@BD@B@H@D@BDAFCDGBGDCB@@ABA@@BA@@B@@@B@B@B@B@BBB@B@B@B@@@BBB@B@@@BB@BBB@@@BB@@BBB@@B@B@B@@@BAB@BABA@A@A@ABA@AB@B@@@@AB@B@@@B@@@B@B@@@@DDB@@@B@@@BA@@@@B@B@BBBBBB@BB@@D@B@@@BBB@B@@@@@B@@ABAB@@@B@B@@BBB@D@B@B@BABA@AB@@@B@@B@@@B@B@@@D@@@B@@@@@@B@@@B@B@B@@@D@B@@@BB@@FL@@@BB@@ABABAB@B@@@D@FBB@D@H@B@@@BB@@@B@B@B@@@@B@@@B@@ABAB@@@B@@B@BB@@BBBB@BBB@BBD@B@@@@@BB@@@B@B@@B@@BB@B@@AB@B@@@B@@BBB@@BBDB@@D@B@@@B@@@B@B@@@BB@BBDDBBB@@BBB@BB@@B@@B@@BBAB@B@B@B@BBBDBB@B@FAB@BBB@BBBBD@DBFBD@B@B@BAD@@@@@B@@B@B@@CD@@ABAB@DCF@@@B@BB@D@B@@B@@BBAB@BA@@BBB@BBB@BB@BADABADAB@@@@@@@@B@@@@@B@@@@A@@@@B@@AB@B@@Md@BA@@BABADBNAD@D@B@@BBBBDBB@D@DBBBB@@@@@BB@@@@BB@@@B@@@B@@A@@B@@@B@@@B@@@@@B@@@@BB@@@B@@@@@B@@@@@@BB@@@@B@@@HCFCBAD@BAB@B@BBB@BBBBB@BDBBBB@BB@B@@@DAFCB@@@B@B@PD@BB@@B@B@@@BB@BB@@D@DADADAB@B@B@@BB@DBDBFDFBD@B@@@BA@ABADAB@D@D@@@D@BBD@BBB@@AB@@AACB@@ABA@@@@B@@B@@BBBBBBBBD@DBB@LBBBB@BBDBDBD@B@B@DAB@FCB@B@B@D@BB@@FDFDHB@BB@B@BBB@BDBBHJNNHHDDBDB@@BDB@BP^@B@@hCF@NA^B@@@A@@@A@A@@@A@C@@B@BADA@A@@@@@@BAA@@@@@A@@@@A@@@@@A@@@@@@@AA@B@AC@@@@@C@@@@@@@@@@@A@@@@@@BA@@@@@@@@AAB@A@@@BA@B@A@@@@@@@A@@@BA@@@@A@@@@@@BAB@@A@@A@@@A@B@@@A@@@@A@@B@@@@ADA@@@@AAB@@@B@@@@AA@@@@@@@@AAB@A@@@@@@@A@@B@@A@@@@@BB@@A@@@@@@@@B@@A@@@@@@@@@A@@@@@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@B@@@@@@A@@@@B@@@@@B@@@@@@A@@F@AA@A@@@A@@AA@@@@@CC@AE@@@CD@DB@B@BD@@@@@BA@@@@CE@@B@D@@@@@@CD@BA@C@@@@@AB@B@@@@@CA@@D@@@@@@AC@@@@@@AM@@C@ABACC@MAABCA@@@@A@@AA@@@ABG@CB@AABADFBADBDFDHFFDDFFBB@ADABAB@FCFEBA@CBA@@@IBA@A@A^B@CFQ@A@I@GCGCEEECGCCCEGIK@EEAAA@CCAAAAECGGACECCCGICEAASUOOQWUaIOGQAAACAAGKCECGEICECMEMEIACEICEEGCCEEACMKa_IGIGKIEEEEOAICMCGCKGGESYAAEEGGGECAOKKKEEGGCIKQEG" ],
														"encodeOffsets" : [ [
																121356, 32618 ] ]
													}
												},

												{
													"type" : "Feature",
													"id" : "320116",
													"properties" : {
														"name" : "六合区",
														"cp" : [ 118.822132,
																32.323584 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@@@BB@B@@@@@B@@BB@@@B@@@B@@@B@@@@BB@@@@@B@@@B@@@@@B@@@B@@@@@B@@@B@@@B@@@@@B@@@@@B@@@@@B@@@B@@@@@B@@@@@@@B@@B@@@B@@@@@B@@@@@@@B@@@@@@@@@B@@B@@@@@@@@B@A@@B@@@@@B@@@@AB@@@@@B@@A@@@@@AB@@@@A@@@@@@B@@A@@@@@A@@@@@A@@@@@A@@@@@@@A@@@@@A@@@@BA@@@@@@@A@@@@@A@@@@@A@@@@@@@A@@@@@A@@@@@A@@@@@@@A@@@@@@BA@@B@@@@AB@@@@AB@@@@AB@@@@@BA@@B@@A@@B@@@@A@@B@@@BA@@B@@@B@@@@@B@@@BB@@B@@@BB@@@@BB@@@@@@@BB@@@@B@@@@@@@B@@@@@@@B@@@B@@@B@@@B@@@@@@@BB@@@B@@@B@@@B@@@@@B@B@@@@@BB@@@@B@@@@BB@@@@@BB@@@@B@@@BB@@@@B@@BB@@@B@@@B@@@B@@@B@@@B@@@B@@@@AB@@@B@@@@@B@@@@AB@@@@@B@@@@AB@@@@@@@B@@@@@BA@@@@B@@@@@@@@@BA@@@@B@@@@@BA@@B@@@@A@@@A@@@@@A@@@@BAA@@@@A@@@@@@@@@A@@@@@@@AA@@@@A@@@@@@@@@A@@@@@@@A@@@@AAB@@@B@B@@@B@@@@@B@@AB@@@@@@AB@@A@@B@@@@A@@B@@@@@B@@A@@B@@@@@B@@@@@B@@@@@B@@@@@B@@@@@B@@@B@@@BB@@B@@@@@B@@@@@B@@BB@B@@@B@@@B@@@B@@@B@@@B@B@@@@@BB@@@@@@BB@@@@B@@B@@@@@@@B@@B@@B@@@@@B@@@BA@@B@@@@@B@@BB@@@@B@@@@@B@BB@@@@@@@@BB@@@@BB@@@@@@@BB@@@@B@@@@BB@@@@BB@@B@@@B@@BB@@@@@@@B@@BB@@@@B@@B@@@B@@@B@@@B@@@@@B@@A@@@@B@@A@@@@@A@@@@B@@A@@@@@@@A@@@@@A@@@@@@@A@@@@@@@@@A@@@@@@@A@@@@@A@@@@AA@@@A@@@A@@@@@@@A@@@@@A@@@@AA@@@@@@@@AA@@A@@@A@@@A@@A@@@@A@@A@@@A@@@@BA@@@@@@@AB@@@B@@@@@B@@@B@@@@@B@B@@@@@B@@@@A@@B@@@@A@@@A@@@@@@@A@@@@@AA@@@@A@@@A@@@A@@@@@A@@@@@A@@@@B@@@@@BA@@B@@@@@B@B@@@@@@@BA@@@@B@@@B@@@B@@@B@@@@@BB@@@@@B@@B@@@@BB@@@B@@@@@B@@@B@@A@@@@@@@@@AB@@@@A@@@@@@AA@@@@@@@A@@@@@@@A@@B@DA@BB@@@@@B@@@@@B@@@B@@B@@@@@@B@@@@B@@@@B@@@@@@BB@@@@@@B@@@@@@@@BB@@@@B@@B@@B@@@BB@@@@B@@@B@@@B@@@@@B@@@@@@@B@@BB@@@@@B@@@@@B@@@B@@@@@@@B@B@@@@@B@@@@@B@@@B@@@@@B@@@@@B@@@B@@@@BB@@@@@B@@@@B@@@@@BA@@@@@@B@@@@@B@@@@@@@@@B@@@@@B@@@@@@@@B@@@B@@@@AB@@@@@@AB@@@@A@@B@@@@AB@@@B@@@B@@@@@BB@@B@@@@BB@@@@BA@@B@@@B@@@@@B@@@@@BB@@@BB@@@@B@@@B@@@@BB@@@@@B@@@B@@@D@B@B@B@B@DBHBLFBCBA@EICIEAEAAC@BE@@@A@@@@@@@A@@@@@@@A@@@@@@@@@A@@@@@@@A@@@@@A@@@@@A@@@@@AB@@@@A@@@@@A@@@@@A@@@@@A@@BA@@@@@A@@@AA@@@@@A@@@@@A@@BA@@@@@AB@A@@A@@@@@AA@@@@A@@@@AA@@@@@AA@@@@@AA@@@@A@@@A@@@@@@@AB@@@B@@A@@B@@@@@B@@@B@@@B@B@@@B@@@B@@@@@B@B@@@@@B@@@@@B@@B@@B@@B@@@B@@@@BB@@B@@B@@B@@@B@@@B@@@@A@@@@@AA@@@@@@A@@@@@@@A@@@@@A@@@@@@@A@@@@B@@@BA@@B@@@BA@@B@@@B@@AB@@@B@@@@@B@@@B@@@@@@@@B@@B@@@@B@@@@@@@B@@@@@@@@@B@@@@@B@@@@@@@B@@@@@@@@@B@@@@@@B@@B@@B@@@B@@@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@@@A@@@@@@@@@@@B@@@@@@@@@@@@A@@@@B@@@@@@@@@B@@B@@B@@@B@@@B@@@B@@@B@@A@BB@B@@@B@BA@@@@@@BB@@B@B@B@@@@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@AB@@@@A@@@@BA@@@A@@@@BA@@@A@@BA@@@@@@BA@@@@B@@A@@BA@@@@B@@A@@@@BA@@B@@A@@B@@@@AB@@@BA@@@@BA@@@@@@B@@A@@@@B@@@@A@@B@@@@@@AB@@@@@@@@AB@@@@@@@BA@@@@@@B@@A@@@@@@B@@@@A@@@@B@@@@A@@B@@@@@@A@@B@@@@@@AB@@@@@@@BA@@@@@@@@B@@A@@@@B@@A@@@@@@@AB@@@@@@A@@@@B@@A@@@@@@@A@@@A@@@@@A@@@@@A@@@A@@@@@A@@@@@A@@@AB@@@@A@@@@@AB@@@@@@A@@B@@@@A@@B@@A@@@@BA@@@@@AB@@@@@@A@@B@@A@@@@B@@A@@B@@@B@@@BA@@@@B@@@B@@A@@BB@@B@@@B@@@B@B@@@@@B@@@B@B@@@B@@@@@BA@@B@@@@@@@B@B@@@B@@@@@B@@@B@@@B@@@B@@BB@@@@@B@@BB@@@@@B@@@B@@B@@B@@@@BB@@@@@@@BB@@@@@@@BB@@@@B@@@B@@@@@BB@@B@@@@@B@@B@@@B@@@B@@@B@B@@@B@@@B@@@B@@BB@@@@@@BB@@@BB@@@@BB@@DABB@@B@@A@@B@@@@@B@@@@@B@@AB@@@B@@@@@BA@@B@@@B@@@B@@@B@@BB@@@@@B@@@B@@@B@@@@@B@@@B@@@B@@@@@BA@@@@B@@@@A@@@A@@@@@A@@BA@@@@@@@A@@@A@@@@@@@A@@@@@A@@@@@@@A@@@@@@@@@A@@@A@@B@@A@@@A@@@@@@@@@AB@@A@@@@@A@@B@@A@@@@BA@@@@@AB@@@@@@AB@@@@@@AB@@@@@@AB@@@@AB@@@@@@AB@@@B@@A@@@@B@@AB@@@B@@A@@B@@@@AB@@@BA@@B@@@@AB@@@BA@@@@B@@A@@@@B@@A@@@@@@@AB@@@@@@A@@@@A@@A@@@@@@@A@@@@@A@@@@@@@@@A@@@@@A@@@@@@BA@@@AB@@@@A@@@@@A@@A@@@@A@@@@@A@@@@@A@@@@@A@@BA@@@@@A@@@A@@@@@@@A@@B@GC@@AA@@@@A@@A@@A@B@@B@@A@@@@B@@A@@@A@AA@@@@A@@B@@@@AA@B@A@B@@@@@@A@@BBB@@AB@@@@@@@@@C@@@@AB@@@A@@@@@AC@@@A@@@@@@@AB@@A@@BCB@@AA@@@@@@AA@@@@@AAB@@@@@A@@@@B@A@B@@A@@@@AA@@@@@B@@@@@@AA@@@@@@@AAA@@B@AA@@@@@@@AA@@@A@AA@@@@A@@BAA@@@@AA@@@A@@@@@@@A@@@@A@@@A@@@@@@B@@@B@@AA@B@@@B@@AB@@C@@@A@@@A@@@IB@A@@A@@A@@A@@@@@@@AA@@@@B@BA@A@@@@B@@@@@@@B@A@BA@@@AA@@@@A@B@A@@@@AA@@A@@@@@@@@ABAA@@@AA@@A@@@B@AA@@@@@@@@AAA@@@@@@@@AA@@@@A@@@@@@@@@@B@@A@@BB@@BA@@@@DD@@@A@@@@@A@@@@BB@@@@@@B@@@@A@@@@@A@@BB@A@@B@@AA@@@@AA@@@A@BA@AA@@@A@A@@@@ABAB@@B@@B@@B@@@@@@B@@@B@B@@A@@@@A@@@@@@@@A@@BB@@@@@AB@@@@@@@@@@A@@@@@@@A@@@@B@@@@@@@B@BA@B@A@@A@@A@@A@@@@A@@@@B@@@@@@AB@C@A@@@AA@@AA@@A@@A@B@@@@@@CB@@AB@A@@@@@@@ABAB@@A@@B@@@@@@@@A@@@@AA@@@@@A@@@@@@A@@@A@@@@@A@A@A@@@@B@AAAB@@AA@@@A@@BA@@@@BAA@@B@BCAC@A@@B@@AB@@@@AAA@A@@A@CA@BA@ACC@@@BA@A@@B@B@@@DB@ABABC@@@@BA@@@@AA@A@AB@@A@@@@@@C@BC@@@@@@@AB@@BBB@@BB@@@@@@BA@AB@@B@@@A@BB@@@@@B@@@@@@@B@AAB@@@@@@@B@@@@B@@@A@@@@@A@@@@@@@@AA@@@@B@@A@@BA@@AA@@AA@@A@@@@@@@A@@A@@@ABBB@@A@@@@@B@@@@B@B@DAHA@@@A@@BBB@@@@A@@@AB@@@@@@A@@@@B@@@@A@@@@@@@@@@B@@@@@@@@@@A@@@@@AB@@A@@@@A@@BAA@@@A@@AB@@A@B@AA@@@@C@@@A@A@A@@@CAA@A@@@A@@A@@@@A@@@A@@@@@@AAA@@@@@A@@@@@@A@@@@C@@B@@@@@@A@@@BB@@@B@@@A@@@BA@@AA@@FBB@@@BA@@@@@@@A@@@@AA@@@@@A@A@@@@B@@B@AB@@@@B@@@@BBA@@B@@@@@@@@B@@@BBB@@@@@B@@@@@B@@@@@@A@@A@@@A@@A@@@@BA@BB@BBB@@AB@B@@@BA@@AA@@@@BAB@@@@@DABAB@BB@@@A@@@@BAA@@@AAA@A@@@AA@@AA@A@A@@@A@@@A@@A@@@@A@@A@A@AA@A@@A@@@A@A@@A@@AAA@@@@@@@@BAAE@@A@A@A@@BAA@@@@A@@BA@@@@@@BA@@@@@AB@@A@@@@@A@@B@@A@A@@A@@AB@AA@@@@@@B@@AB@@B@@@B@@@@@@@BB@@ABA@@B@B@@A@@AABC@BB@@@B@@@B@@@@@B@@@BA@@@A@@A@@AAA@@B@BB@@B@A@@@@AB@B@@AAA@AA@AA@@AA@@@@@A@@CA@@B@@ABA@@@A@@@@@@@@BA@C@AA@@A@@AA@@B@@CC@@A@@A@@@@A@@@A@@@@BA@@B@A@@A@@@A@@@@@A@@@@@ABA@@@@@@B@@@@@B@@@B@@@@@B@@@@@@@@AB@B@AA@@@@@AAA@@@AA@@@@@@@@A@@@A@@@A@@A@CA@@AC@@@A@A@@@@@@@@@A@@B@@@@A@@BBBA@@@@B@AA@@@A@@@A@@B@BA@C@@@@@A@AAA@@@@@ABA@@@@@@@@@A@@B@@AB@AABA@@@@@AA@@@@B@@A@@@@@@B@@@@@@AA@@@@@@@@@AAA@A@A@A@@A@@C@@B@@@@B@BB@@@B@@@@AA@@A@@@@B@@@@@@@AEB@A@@A@@@AA@@@@@@@AG@B@AA@@@@EF@BAB@B@DABAHAD@FAFADAF@@@D@DATA@@B@@C@@@AAA@@BA@C@ADGBC@@GEEEGEAA@AYeMMAAEEEEECCCOGGCMECAC@EAM@}AO@C@uCIAMBOBcFE@E@C@E@A@[AGNObCHAFCFCHCFCBABABEDCDOFGBKDK@A@E@C@GAA@QCCAUIICECIECAGEECAACC@CAC@C@CBCPqDK]A@B@BAB@J@@AB@DABEFEDA@ABCB@BAAEECCEECGCECAABCEABBBA@@DAH@B@@BB@@@B@@B@ADBB@NDDAB@B@DN@@B@@@@D@@B@@@@C@@@DB@@@@A@A@@B@@@@@DABC@@D@@@@C@A@@@DF@@@@AB@@@@C@@A@ACAC@@D@@BFD@@D@@@@BB@@@B@@@BBBE@@@@B@@@@A@@@@@A@@@@@@B@@@@A@@@@@@@@B@@@@@@@@A@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@BA@@@@@@@@@@BA@@A@@@@@BA@@@@B@@@@@@@BBA@B@@@@@@B@@B@@A@@@A@BB@@@@CB@B@@A@@@@B@@B@@@A@B@@@B@@@@BA@AB@@@@@@@B@@B@@A@@@B@@@@@@@B@AAB@@B@A@BB@@@@@@@@AB@@@@@@@B@@@@@@@@@@@D@@@@BDA@B@@B@@@@@@@B@@@@@B@@B@@@@@B@AB@@@@@@@BCBABA@@@@D@B@@@B@B@@@B@@]AMBE@gD@@@@A@@BB@@BB@@BAB@@AB@@A@C@ABE@CBABCBADCB@D@B@BBDFJDHFHBDBB@B@@@B@B@B@D@BADAD@@ABA@@@A@AAC@ABC@ABAB@B@@@B@B@DBBDBDDHBDBDBDB@BBBBBDDDBFBJ@D@D@HAB@BBB@@@@B@DABA@ABE@C@C@CBA@ABBD@BDDD@DBB@D@DAB@FAF@D@BBBBBB@BBDBDADABCBIBA@ABAD@B@B@BDBBD@@A@A@C@A@ABAB@B@BBBBB@BB@D@B@B@DBBB@BCBABGLBBB@@@B@DAB@@@B@@@B@@B@@@F@B@@ABA@A@A@A@A@@@AB@@@@@BB@B@BBB@BB@B@@@BADCD@@A@ABA@AAAA@@@A@AAA@AAA@@A@@@ABCLCBIHA@ABAF@BBBDFFJBBBB@HDLBH@B@@@B@DCL@B@B@BBJBH@DBJ@B@FB@@DB@@B@DAD@B@B@DBDBB@BADAJ@B@@A@A@G@@@EAA@@@@@@@GACAC@@@@@C@C@@BIBABGBKD@@A@@B@@A@A@@@@@A@@AA@@@A@@@A@@@@@@@AA@@@@@@AA@@@@@@@AA@@@@A@@@@@A@@AA@@@@@@A@@@@@A@A@@@A@@@A@@@AB@@A@@@A@@@A@@@A@@AA@@@@A@@A@@@A@@AA@@@@@A@@AA@@BA@@@@@A@@@A@@@@BA@@@A@@B@@A@@@@@A@@@@@A@@@@@A@@@@@A@@@@@@@A@@@@@A@@@A@@@@@@@A@@@A@@@A@@@A@@@A@@@A@@@@B@@@B@@A@@B@@@B@@@B@@@B@@@@A@@@@@A@@@A@@@A@@@A@@@@@A@@@A@@@@@A@@@A@@@A@@@A@@B@@A@@@@@A@@BA@@@@BA@@@@@@B@@@@AB@@@@@B@B@@@B@D@B@@@@@B@@@@@@@B@@@@@@@@@B@@@@@@BB@@@@@@AB@@@@@B@@@@@@@@@B@@@@@B@@@@@B@@@@@@@@@B@@@@@B@@@@@B@@@@@@@@@B@@@@@B@@B@@B@@B@@@@BB@@@@@B@@@B@@@B@@@B@@@@@B@@@B@@@B@@@B@@@B@@@B@@@BA@@B@@@B@@@@BB@@@@@@@@BB@@@@@@@@B@@B@@@@@@B@@B@@@@@BB@@@@@@BB@@@@B@@B@@@@B@@@@B@@@@BB@@@B@@@@BB@@@B@@@BA@@@@B@@@B@@@@@B@@A@@@@B@@@@@BAB@@@@AB@@A@@@A@@@A@@@A@@@A@@@A@A@@@@@AB@@@@A@@B@@@@@B@B@@@@@B@@@@@BB@@@@B@@@BB@@@@B@@@BB@@B@@@@@B@@BB@@@@@B@@@@@B@@@@@@@@@B@@@@@BA@@@@@@B@@A@@@@@@B@@A@@@@B@@@@@@A@@@@BA@@@@@A@@B@@A@@@@BA@@@A@@@@BA@@@ABA@@@A@@@@BA@@@A@@@A@@BA@@@A@@@@@A@@BA@@@A@@@A@@@A@@@@@AB@@A@@@A@@@AB@@A@@@@BA@@@A@@BA@@@@@AB@@A@@@@BA@@@@@A@@BA@@@@@AB@@A@@@@@AB@@@@A@@B@@A@@@AB@@@@@@@@AB@@@@A@@B@@@@AB@@@@@@@BA@@B@@@@@B@@@@@@@B@@@@@@@B@@@@@B@@B@@B@@@@@B@@@B@@@B@@@@@B@@BB@@@B@@@B@@@@@B@@@B@@@B@@B@@B@@@B@@@@@B@@@@BB@@@@@@@B@@@@@BB@@@@B@@@@@@@BB@@@BB@@B@@@@@B@@B@@@@B@@@@BB@@@@@BB@@@@@@BB@@@@B@@B@@DBBB@@@@B@@BB@@@B@@@BB@@@@@@B@@@@@B@@@BA@@B@@@@@B@@@B@@B@@B@@@@@BB@@@@@@BB@@@@@@B@@@@B@@B@@@@@@@BB@@@@@@B@@B@@@@B@@@@@B@@@BA@@@@B@@@@A@@@@@A@@B@@A@@@@B@@@@@B@@@@AB@@@@@B@@@B@@@B@@@BA@@B@@@B@@@B@B@@@B@@A@@B@@@B@@@@@B@@@B@@@BA@@B@@@@@B@@@B@B@@@@AB@@@B@@@@@@AB@@@@@@@BA@@@@@@B@@A@@@@@A@@B@@A@@@@@AB@@@@A@@BA@@@@@AB@@A@@@@@A@@BA@@@@@AB@@A@@@@@@@@@@@@@@@@@BB@@@@@@@B@@@@@B@@@@@BB@@@@@@B@@B@@BA@@@@@@BBA@@BA@B@@@@@B@@@BBB@@@@B@@@@@@@@@B@@@@AB@BB@@@BB@@@@B@@@@@B@BB@@@BB@A@@BB@B@@@B@@@B@@@BBA@B@@@B@@@@B@@AB@@@BB@@B@@BDB@B@B@@@B@B@@A@ABA@AB@B@D@B@B@@@B@BAB@@BB@@BB@BA@@B@@@B@@@@@B@@@B@@AB@@@B@@@@@B@@AB@@@B@@@BA@@B@@@BA@@B@@@B@@A@@B@@@B@@@@AB@@@B@@@@@B@@@B@@B@@@@B@@BB@@B@@@@@B@@@@@B@@@B@@@@@BA@@B@@@@@B@@@B@@@B@@@@AB@@@@@BA@@@@@@BA@@@@@@B@@A@@B@@@@@B@@@@B@B@@@@AB@@@@AB@@@@A@@@A@@@@B@@AB@@@@@@AB@@@@A@@@@BA@@@@@A@@@A@@@A@@@A@@@@@A@@@A@@@AB@@@@A@@@@@AB@@@B@@@@@B@@@B@@@B@@@@@@B@@@B@@BB@@@@@BA@@B@@@@@B@@@B@@@@@B@@@@@B@@@@@BA@@@@@@B@@@B@@A@@@@B@@@@A@@B@@@@@@A@@B@@@@@@@B@@@@@B@@@@@@BB@@@@" ],
														"encodeOffsets" : [ [
																121547, 33389 ] ]
													}
												},
										],
										"UTF8Encoding" : true
									});
				}));