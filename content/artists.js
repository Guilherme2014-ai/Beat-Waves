import { musics } from "./musics.js";

export const artists = {
    Eminem: {
        name: "Eminem",
        profile_picture: "https://playreplay.com.br/wp-content/uploads/2017/12/eminem-untouchable-novo-single-ouca.jpg",
        age: 50,
        bio: "Marshall Bruce Mathers III, mais conhecido pelo seu nome artístico Eminem, é um rapper, compositor, produtor musical e ator estadunidense. Adquiriu rápida popularidade em 1999 com o lançamento do disco The Slim Shady LP, o qual venceu o Grammy Award de Melhor Álbum de Rap do ano",

        youtube_url: "https://www.youtube.com/channel/UCfM3zsQsOnfWNUppiycmBuw",
        instagram_url: "https://www.instagram.com/eminem/",
        spotify_url: "https://open.spotify.com/artist/7dGJo4pcD2V6oG8kP0tJRR",

        musics: musics.filter(music => music.owner == "Eminem")
    },
    MGMT: {
        name: "MGMT",
        profile_picture: "https://cdns-images.dzcdn.net/images/artist/764288d62afb1c546888d3797930e16c/500x500.jpg",
        age: 20,
        bio: `MGMT[1] é uma banda de pop rock estadunidense formada em 2002 em Middletown, Connecticut. Foi criada pelos multi-instrumentistas Andrew VanWyngarden e Ben Goldwasser. Além de VanWyngarden e Goldwasser, a formação ao vivo do MGMT atualmente conta com o baterista Will Berman, o baixista Simon O'Connor e o guitarrista e tecladista James Richardson.
        Originalmente contratados pelo recém formado selo Cantora Records pelo seu cofundador Will Griggs, o MGMT posteriormente gravou para a Columbia e RED Ink em 2006[2][3][4] e lançaram seu álbum de estreia, Oracular Spectacular, no ano seguinte. Após o lançamento de Oracular Spectacular Asti, Richardson e Berman juntaram-se à banda em estúdio para gravar Congratulations, que foi lançado em 13 de abril de 2010.[5] Em janeiro de 2011 eles começaram a trabalhar em seu homônimo terceiro álbum de estúdio.[6] Foi lançado em exclusivamente na Rdio em 9 de setembro de 2013 e no dia 17 de setembro de maneira internacional.[7] O quarto álbum de estúdio do grupo, Little Dark Age, foi lançado em fevereiro de 2018. A partir de 2019, a dupla começou a produzir música independente. Ainda neste ano, lançaram a canção "In the Afternoon" como seu primeiro single totalmente independente.[8]`,

        youtube_url: "https://www.youtube.com/channel/UCC2i4uIWWjx5L5V5Q5k7eiQ",
        instagram_url: "https://www.instagram.com/whoismgmt/",
        spotify_url: "https://open.spotify.com/artist/0SwO7SWeDHJijQ3XNS7xEE",

        musics: musics.filter(music => music.owner == "MGMT")
    },
    "Oliver Tree": {
        name: "Oliver Tree",
        profile_picture: "https://content.api.news/v3/images/bin/ec911f3661dbcd8aedd37969539ec2bb",
        age: 29,
        bio: `Oliver Tree Nome artístico de Oliver Tree Nickell, é um cantor, compositor, produtor e cineasta americano nascido em Santa Cruz na Califórnia, sendo a sua primeira música de sucesso ''When I'm Down.''`,

        youtube_url: "https://www.youtube.com/c/OliverTree",
        instagram_url: "https://www.instagram.com/olivertree/",
        spotify_url: "https://open.spotify.com/artist/6TLwD7HPWuiOzvXEa3oCNe",

        musics: musics.filter(music => music.owner == "Oliver Tree")
    }
}
