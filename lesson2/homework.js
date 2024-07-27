const f1_name = "f1";
const f2_name = "f2";
const f3_name = "f3";
const f4_name = "f4";
const f5_name = "f5";

const test_cases = {
    [f1_name] : [
        [[""], ""], 
        [["a,b,c.d"], "a.b.c.d"], 
        [[".....,...,,,.,"], ".............."], 
        [["3,141569, 123,123,134152,,,,,23423"], "3.141569. 123.123.134152.....23423"], 
        [[","], "."]
    ],

    [f2_name] : [
        [["", ""], ""], 
        [["", "GOGI"], ""], 
        [["GOGI", ""], "GOGI"], 
        [["GOGI,BOBA,DOBA", ""], "GOGIBOBADOBA"], 
        [["a,b,c.d", "G"], "aGbGc.d"], 
        [[",,,", "GOGI"], "GOGIGOGIGOGI"], 
        [[",", "."], "."], 
        [[",", "...d..."], "...d..."]
    ],
    
    [f3_name] : [
        [["", ""], undefined], 
        [["", "GOGI"], undefined], 
        [["GOGI", ""], undefined], 
        [["GOGI,BOBA,DOBA", "|"], "GOGI|BOBA|DOBA"], 
        [["a,b,c.d", "G"], "aGbGc.d"], 
        [[",,,", "GOGI"], undefined], 
        [[",,,", "|"], "|||"], 
        [[",", "|"], "|"], 
        [[",", "||"], undefined],
    ],

    [f4_name] : [
        [["", "", ""], undefined], 
        [["asdf", "", ""], undefined], 
        [["fasdf", "", "asdfs"], undefined], 
        [["adfa", "sdf", "asdf"], undefined], 
        [["adfaa", "a", "BBB"], "BBBdfBBBBBB"], 
        [[",,,", ",", "|"], "|||"], 
        [[",,,", ",", "|||"], "|||||||||"], 
        [[",", ",", "|||"], "|||"], 
        [[",", ".", "|||"], ","], 
        [[".,", ".,", "|||"], undefined]
    ],

    [f5_name] : [
        [["", "", ""], ""],
        [["asdfsvsd", "", ""], "asdfsvsd"],
        [["dfewfsdsdg", "", "sfsdfsdfsdf"], "dfewfsdsdg"],
        [["abcdefg", "d", "GOGOGO"], "abcGOGOGOefg"],
        [["abcdefg", "def", "GOGOGO"], "abcGOGOGOg"],
        [["abcdefg", "fgh", "GOGOGO"], "abcdefg"],
        [["abcdefg", "zabc", "GOGOGO"], "abcdefg"],
        [["a,b.c,e,g,", ",", "."], "a.b.c.e.g."],
        [[",", ",", "."], "."],
        [[",", "", "."], ","],
        [[",,,", "", "."], ",,,"],
        [[",,,", ",", "."], "..."]
    ],
}
