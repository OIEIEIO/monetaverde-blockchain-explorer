var api = 'http://173.212.213.63:26081';
var apiList = ['http://173.212.213.63:26081'];
var blockTargetInterval = 60;
var coinUnits = 1000000000000;
var symbol = 'MCN';
var refreshDelay = 30000;
// pools stats by MainCoins
var networkStat = {
    "mcn":  [
	["monetaverde.minercountry.com", "https://monetaverde.minercountry.com:8443/stats"],
        ["inf8.minercountry.com", "https://inf8.minercountry.com:8446/stats"],
        ["dyngepeng.zapto.org/MCN", "http://dyngepeng.zapto.org:3130/stats"],
        ["merge.gonspool.com/dprmcn/", "https://merge.gonspool.com/mcndpr/api/stats"],
        ["merge.gonspool.com/infmcn/", "https://merge.gonspool.com/mcninf/api/stats"],
	["mcnxeon.oieieio.xyz", "http://mcnxeon.oieieio.xyz:8222/stats"],
	["mcnmultialgo.oieieio.xyz", "http://mcnmultialgo.oieieio.xyz:8222/stats"]
		
    ]
};
