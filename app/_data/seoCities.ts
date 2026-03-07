export interface City {
  slug: string
  name: string
  state: string
  stateCode: string
}

export const SEO_CITIES: City[] = [
  // Capitais estaduais (27)
  { slug: 'sao-paulo',          name: 'São Paulo',          state: 'São Paulo',            stateCode: 'SP' },
  { slug: 'rio-de-janeiro',     name: 'Rio de Janeiro',     state: 'Rio de Janeiro',       stateCode: 'RJ' },
  { slug: 'belo-horizonte',     name: 'Belo Horizonte',     state: 'Minas Gerais',         stateCode: 'MG' },
  { slug: 'brasilia',           name: 'Brasília',           state: 'Distrito Federal',     stateCode: 'DF' },
  { slug: 'salvador',           name: 'Salvador',           state: 'Bahia',                stateCode: 'BA' },
  { slug: 'fortaleza',          name: 'Fortaleza',          state: 'Ceará',                stateCode: 'CE' },
  { slug: 'curitiba',           name: 'Curitiba',           state: 'Paraná',               stateCode: 'PR' },
  { slug: 'manaus',             name: 'Manaus',             state: 'Amazonas',             stateCode: 'AM' },
  { slug: 'recife',             name: 'Recife',             state: 'Pernambuco',           stateCode: 'PE' },
  { slug: 'goiania',            name: 'Goiânia',            state: 'Goiás',                stateCode: 'GO' },
  { slug: 'porto-alegre',       name: 'Porto Alegre',       state: 'Rio Grande do Sul',    stateCode: 'RS' },
  { slug: 'belem',              name: 'Belém',              state: 'Pará',                 stateCode: 'PA' },
  { slug: 'florianopolis',      name: 'Florianópolis',      state: 'Santa Catarina',       stateCode: 'SC' },
  { slug: 'maceio',             name: 'Maceió',             state: 'Alagoas',              stateCode: 'AL' },
  { slug: 'natal',              name: 'Natal',              state: 'Rio Grande do Norte',  stateCode: 'RN' },
  { slug: 'teresina',           name: 'Teresina',           state: 'Piauí',                stateCode: 'PI' },
  { slug: 'campo-grande',       name: 'Campo Grande',       state: 'Mato Grosso do Sul',   stateCode: 'MS' },
  { slug: 'joao-pessoa',        name: 'João Pessoa',        state: 'Paraíba',              stateCode: 'PB' },
  { slug: 'aracaju',            name: 'Aracaju',            state: 'Sergipe',              stateCode: 'SE' },
  { slug: 'cuiaba',             name: 'Cuiabá',             state: 'Mato Grosso',          stateCode: 'MT' },
  { slug: 'macapa',             name: 'Macapá',             state: 'Amapá',                stateCode: 'AP' },
  { slug: 'porto-velho',        name: 'Porto Velho',        state: 'Rondônia',             stateCode: 'RO' },
  { slug: 'boa-vista',          name: 'Boa Vista',          state: 'Roraima',              stateCode: 'RR' },
  { slug: 'rio-branco',         name: 'Rio Branco',         state: 'Acre',                 stateCode: 'AC' },
  { slug: 'palmas',             name: 'Palmas',             state: 'Tocantins',            stateCode: 'TO' },
  { slug: 'vitoria',            name: 'Vitória',            state: 'Espírito Santo',       stateCode: 'ES' },
  { slug: 'sao-luis',           name: 'São Luís',           state: 'Maranhão',             stateCode: 'MA' },
  // Grandes cidades não-capitais
  { slug: 'campinas',           name: 'Campinas',           state: 'São Paulo',            stateCode: 'SP' },
  { slug: 'guarulhos',          name: 'Guarulhos',          state: 'São Paulo',            stateCode: 'SP' },
  { slug: 'santos',             name: 'Santos',             state: 'São Paulo',            stateCode: 'SP' },
  { slug: 'ribeirao-preto',     name: 'Ribeirão Preto',     state: 'São Paulo',            stateCode: 'SP' },
  { slug: 'sorocaba',           name: 'Sorocaba',           state: 'São Paulo',            stateCode: 'SP' },
  { slug: 'sao-jose-dos-campos',name: 'São José dos Campos',state: 'São Paulo',            stateCode: 'SP' },
  { slug: 'sao-bernardo-do-campo',name:'São Bernardo do Campo',state:'São Paulo',          stateCode: 'SP' },
  { slug: 'santo-andre',        name: 'Santo André',        state: 'São Paulo',            stateCode: 'SP' },
  { slug: 'osasco',             name: 'Osasco',             state: 'São Paulo',            stateCode: 'SP' },
  { slug: 'uberlandia',         name: 'Uberlândia',         state: 'Minas Gerais',         stateCode: 'MG' },
  { slug: 'contagem',           name: 'Contagem',           state: 'Minas Gerais',         stateCode: 'MG' },
  { slug: 'juiz-de-fora',       name: 'Juiz de Fora',       state: 'Minas Gerais',         stateCode: 'MG' },
  { slug: 'niteroi',            name: 'Niterói',            state: 'Rio de Janeiro',       stateCode: 'RJ' },
  { slug: 'nova-iguacu',        name: 'Nova Iguaçu',        state: 'Rio de Janeiro',       stateCode: 'RJ' },
  { slug: 'sao-goncalo',        name: 'São Gonçalo',        state: 'Rio de Janeiro',       stateCode: 'RJ' },
  { slug: 'duque-de-caxias',    name: 'Duque de Caxias',    state: 'Rio de Janeiro',       stateCode: 'RJ' },
  { slug: 'joinville',          name: 'Joinville',          state: 'Santa Catarina',       stateCode: 'SC' },
  { slug: 'blumenau',           name: 'Blumenau',           state: 'Santa Catarina',       stateCode: 'SC' },
  { slug: 'londrina',           name: 'Londrina',           state: 'Paraná',               stateCode: 'PR' },
  { slug: 'maringa',            name: 'Maringá',            state: 'Paraná',               stateCode: 'PR' },
  { slug: 'anapolis',           name: 'Anápolis',           state: 'Goiás',                stateCode: 'GO' },
  { slug: 'feira-de-santana',   name: 'Feira de Santana',   state: 'Bahia',                stateCode: 'BA' },
  { slug: 'caruaru',            name: 'Caruaru',            state: 'Pernambuco',           stateCode: 'PE' },
  { slug: 'carapicuiba',        name: 'Carapicuíba',        state: 'São Paulo',            stateCode: 'SP' },
  { slug: 'mogi-das-cruzes',    name: 'Mogi das Cruzes',    state: 'São Paulo',            stateCode: 'SP' },
  { slug: 'franca',             name: 'Franca',             state: 'São Paulo',            stateCode: 'SP' },
  { slug: 'pelotas',            name: 'Pelotas',            state: 'Rio Grande do Sul',    stateCode: 'RS' },
  { slug: 'caxias-do-sul',      name: 'Caxias do Sul',      state: 'Rio Grande do Sul',    stateCode: 'RS' },
  { slug: 'canoas',             name: 'Canoas',             state: 'Rio Grande do Sul',    stateCode: 'RS' },
  { slug: 'betim',              name: 'Betim',              state: 'Minas Gerais',         stateCode: 'MG' },
  { slug: 'montes-claros',      name: 'Montes Claros',      state: 'Minas Gerais',         stateCode: 'MG' },
  { slug: 'caucaia',            name: 'Caucaia',            state: 'Ceará',                stateCode: 'CE' },
  { slug: 'aparecida-de-goiania',name:'Aparecida de Goiânia',state:'Goiás',               stateCode: 'GO' },
  { slug: 'campo-largo',        name: 'Campo Largo',        state: 'Paraná',               stateCode: 'PR' },
  { slug: 'cascavel',           name: 'Cascavel',           state: 'Paraná',               stateCode: 'PR' },
  { slug: 'vitoria-da-conquista',name:'Vitória da Conquista',state:'Bahia',               stateCode: 'BA' },
]

export const CITY_SLUGS = SEO_CITIES.map((c) => c.slug)

export function getCityBySlug(slug: string): City | undefined {
  return SEO_CITIES.find((c) => c.slug === slug)
}
