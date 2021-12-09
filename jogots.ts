
function jogo() {
    var cores = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black","BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral","CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey","DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon","DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink","DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia","Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink","IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue","LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink","LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue","LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid","MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed","MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab","Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip","PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue","SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue","SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise","Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];

    var corvet = []; //escolher cor aleatoriamete
    var randonColors
    
    for (let i = 0; i < 10; i++) {
        randonColors = Math.floor((Math.random() * cores.length) + 1);
        corvet.push(cores[randonColors]);
    }
    corvet.sort(); 
    
    
    randonColors = Math.floor((Math.random() * (corvet.length)) + 1);
    var resultado = corvet[randonColors]
    
    var vida = 6
    var escolha
    
    
    while (vida != 1) {
        escolha = prompt("A cor é uma dessas:\n" + corvet.join(", ") + "\n Vai conseguir adivinhar?\n" + "Vida: " + vida)
        
	if (escolha == resultado) {
            alert("Você acertou!")
            vida = 1;
        }
        else if (escolha == "") {
            alert("Digite alguma cor acima.\n")
        } else if (resultado != escolha) {
            alert("Você errou tente de novo!")
                vida--
        }
    
    }
    if (escolha != resultado) {
        alert("Game Over!")
    } else {
        alert("Obrigado por jogar!")
    }
}



