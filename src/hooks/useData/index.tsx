import { useState } from "react"
import amazonLogo from '../../assets/amazon.jpeg'
import americanasLogo from '../../assets/americanas.jpeg'
import disneyLogo from '../../assets/disney.jpeg'
import homemaranha from '../../assets/aranha.jpeg'
import ferro from '../../assets/iron-man.jpeg'
import ferro2 from '../../assets/iron-man-2.jpeg'
import thor from '../../assets/thor.jpeg'
import thanos from '../../assets/thanos.jpeg'
import cptMarvel from '../../assets/cpt-marvel.jpeg'
import thorHq from '../../assets/martelo.jpeg'
import origem from '../../assets/origem.jpeg'
import surfista from '../../assets/prateado.jpeg'
import hulk from '../../assets/hulk.jpeg'
import wanda from '../../assets/wanda.jpeg'
import cptAmerica from '../../assets/capitao.jpeg'

export type Card = {
    titulo: string,
    descricao: string,
    id: number,
    stars: number,
    capa: string,
    imgs?: Array<string>
    aparicoes?: Array<string>
}

type Filme = Card & {
    lancamento: number,
    cronologia: number,
}


type SectionAndId = {
    section: 'filmes' | 'personagens' | 'hqs',
    id: number
}

type Filter = 'lancamento' | 'cronologia'

export default function useData(){
    const personagensModel = [
        {
            titulo: 'Homem-Aranha',
            descricao: 'Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.',
            capa: homemaranha,
            aparicoes: ['Capitão América - Guerra Civil', 'Homem Aranha - De Volta ao Lar', 'Vingadores - Guerra Infinita', 'Vingadores - Ultimato'],
            id: 0,
            stars: 5
        },
        {
            titulo: 'Wanda Maximoff',
            descricao: 'Capitã Marvel, parte do exército de elite dos Kree, uma raça alienígena, encontra-se no meio de uma batalha entre seu povo e os Skrulls.',
            id: 1,
            aparicoes: [' Vingadores - Era de Ultron','Capitão América - Guerra Civil', 'Vingadores - Guerra Infinita', 'Vingadores - Ultimato', 'WandaVision'],
            capa: wanda,
            stars: 4
        }, {
            titulo: 'Thanos',
            descricao: "A lua Titã era governada por Mentor (A'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos. Ao contrário do irmão, Thanos, era bem mais poderoso e almejava ainda mais.",
            id: 2,
            aparicoes: ['Vingadores', 'Guardiões da Galáxia - vol. I', 'Vingadores - Guerra Infinita', 'Vingadores - Ultimato'],
            capa: thanos,
            stars: 3
        },
        {
            titulo: 'Hulk',
            descricao: "Na história original dos quadrinhos, o Hulk é um selvagem e poderoso alter ego do Dr. Robert Bruce Banner, um cientista que foi atingido por raios gama enquanto salvava um adolescente durante o teste militar.",
            id: 2,
            aparicoes: ['Vingadores', 'Vingadores - Era de Ultron', 'Thor - Ragnarok', 'Vingadores - Guerra Infinita', 'Vingadores - Ultimato'],
            capa: hulk,
            stars: 3
        }
    ]

    const filmesModel = [
        {
            titulo: 'Capitão América',
            descricao: 'Em Capitão América: O Primeiro Vingador, conhecemos a história de Steve Rogers (Chris Evans) e como ele se tornou o melhor soldado do mundo.',
            id: 0,
            stars: 4,
            lancamento: 2011,
            cronologia: 1917,
            capa: cptAmerica
        },
        {
            titulo: 'Capitã Marvel',
            descricao: 'Capitã Marvel, parte do exército de elite dos Kree, uma raça alienígena, encontra-se no meio de uma batalha entre seu povo e os Skrulls.',
            id: 1,
            stars: 4,
            lancamento: 2019,
            cronologia: 1930,
            capa: cptMarvel
        }, 
        {
            titulo: 'Homem de Ferro',
            descricao: 'Tony Stark (Robert Downey Jr.) é um industrial bilionário, que também é um brilhante inventor, ao ser sequestrado, ele é obrigado a construir uma arma devastadora, mas ao invés disso, cria uma armadura capaz de mudar a história..',
            id: 2,
            stars: 4,
            lancamento: 2008,
            cronologia: 2008,
            capa: ferro
        },
        {
            titulo: 'Homem de Ferro 2',
            descricao: 'O mundo já sabe que o inventor bilionário Tony Stark (Robert Downey Jr.) é o super-herói blindado Homem de Ferro. Sofrendo pressão do governo, da mídia e do público para compartilhar sua tecnologia com as forças armadas            ',
            id: 2,
            stars: 4,
            lancamento: 2011,
            cronologia: 2011,
            capa: ferro2
        },
        {
            titulo: 'Thor',
            descricao: 'Quando é banido do reino de Asgard e exilado na Terra, o arrogante guerreiro Thor (Chris Hemsworth) é obrigado a lutar para reaver seus poderes perdidos.',
            id: 2,
            stars: 4,
            lancamento: 2012,
            cronologia: 2012,
            capa: thor
        }
    ]

    const hqsModel = [
        {
            titulo: 'Thor: Vikings',
            descricao: 'Garth Ennis e sua violência atacam novamente na HQ que leva a violência das histórias de Thor ao limite! Na minissérie de 2003 vemos vikings de um passado distante voltando a vida.',
            id: 0,
            stars: 4,
            imgs: [americanasLogo, amazonLogo],
            capa: thorHq
        },
        {
            titulo: 'Surfista Preateado',
            descricao: 'O único oponente do Devorador de Mundos é o herói que ele aprisionou na Terra: o Surfista Prateado, Galactus jurou não consumir o planeta, mas e se, em vez disso, ele transformar a civilização em seus adoradores?',
            id: 1,
            stars: 4,
            imgs: [americanasLogo],
            capa: surfista
        }, {
            titulo: 'Wolverine: Origens',
            descricao: 'Origem é uma minissérie em quadrinhos publicada pela Marvel Comics em seis edições, entre 2001 e 2002. A história conta a revelação do passado do personagem Wolverine.            ',
            id: 2,
            stars: 4,
            imgs: [amazonLogo],
            capa: origem
        }
    ]

    const [personagens, setPersonagens] = useState<Array<Card>>(personagensModel)
    const [filmes, setFilmes] = useState<Array<Filme>>(filmesModel)
    const [hqs, setHqs] = useState<Array<Card>>(hqsModel)

    const sections = {
        filmes: filmes,
        personagens: personagens,
        hqs: hqs
    }

    const getBySectionAndId = ({section, id}: SectionAndId) => {
        return sections[section].find(i => i.id = id)
    }

    const filterFilms = (filter: Filter) => {
        if (filter === 'cronologia'){
            setFilmes(filmesModel.toSorted((a,b) => a.cronologia - b.cronologia))
            return
        }
        setFilmes(filmesModel.toSorted((a,b) => a.lancamento - b.lancamento))
    }

    return {personagens, filmes, hqs, getBySectionAndId, filterFilms}
}