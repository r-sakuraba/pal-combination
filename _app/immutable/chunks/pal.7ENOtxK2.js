import{a as L,t as R}from"./index.xJ6hpvtd.js";import{C as S}from"./scheduler.tNw1xgdq.js";import{b as I}from"./paths.ZBWFYB_p.js";function G(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function K(e,t){L(e,1,1,()=>{t.delete(e.key)})}function T(e,t,z,k,x,g,o,C,p,F,u,M){let d=e.length,s=g.length,m=d;const c={};for(;m--;)c[e[m].key]=m;const l=[],h=new Map,B=new Map,w=[];for(m=s;m--;){const n=M(x,g,m),a=z(n);let i=o.get(a);i?k&&w.push(()=>i.p(n,t)):(i=F(a,n),i.c()),h.set(a,l[m]=i),a in c&&B.set(a,Math.abs(m-c[a]))}const f=new Set,b=new Set;function y(n){R(n,1),n.m(C,u),o.set(n.key,n),u=n.first,s--}for(;d&&s;){const n=l[s-1],a=e[d-1],i=n.key,r=a.key;n===a?(u=n.first,d--,s--):h.has(r)?!o.has(i)||f.has(i)?y(n):b.has(r)?d--:B.get(i)>B.get(r)?(b.add(i),y(n)):(f.add(r),d--):(p(a,o),d--)}for(;d--;){const n=e[d];h.has(n.key)||p(n,o)}for(;s;)y(l[s-1]);return S(w),l}const v=e=>`No.${e.id} ${e.name}`,N=e=>{const t=e.id.includes("B");return e.id.padStart(t?4:3,"0")},q=e=>e?`${I}/img/${N(e)}_${e.en}.webp`:"",E=e=>"gender"in e,J={モコロン:{id:"1",name:"モコロン",en:"Lamball"},ツッパニャン:{id:"2",name:"ツッパニャン",en:"Cattiva"},タマコッコ:{id:"3",name:"タマコッコ",en:"Chikipi"},クルリス:{id:"4",name:"クルリス",en:"Lifmunk"},キツネビ:{id:"5",name:"キツネビ",en:"Foxparks"},カモノスケ:{id:"6",name:"カモノスケ",en:"Fuack"},ボルトラ:{id:"7",name:"ボルトラ",en:"Sparkit"},エテッパ:{id:"8",name:"エテッパ",en:"Tanzee"},ヒノコジカ:{id:"9",name:"ヒノコジカ",en:"Rooby"},ペンタマ:{id:"10",name:"ペンタマ",en:"Pengullet"},キャプペン:{id:"11",name:"キャプペン",en:"Penking"},パチグリ:{id:"12",name:"パチグリ",en:"Jolthog"},コチグリ:{id:"12B",name:"コチグリ",en:"Jolthog-Cryst"},ナエモチ:{id:"13",name:"ナエモチ",en:"Gumoss"},"ナエモチ(特殊)":{id:"13B",name:"ナエモチ(特殊)",en:"Gumoss"},タマモ:{id:"14",name:"タマモ",en:"Vixy"},ホウロック:{id:"15",name:"ホウロック",en:"Hoocrates"},チョロゾウ:{id:"16",name:"チョロゾウ",en:"Teafant"},ンダコアラ:{id:"17",name:"ンダコアラ",en:"Depresso"},ミルフィー:{id:"18",name:"ミルフィー",en:"Cremis"},ネムラム:{id:"19",name:"ネムラム",en:"Daedream"},イノボウ:{id:"20",name:"イノボウ",en:"Rushoar"},ルナティ:{id:"21",name:"ルナティ",en:"Nox"},モグルン:{id:"22",name:"モグルン",en:"Fuddler"},ヤミイカ:{id:"23",name:"ヤミイカ",en:"Killamari"},ニャオテト:{id:"24",name:"ニャオテト",en:"Mau"},チルテト:{id:"24B",name:"チルテト",en:"Mau-Cryst"},ルミカイト:{id:"25",name:"ルミカイト",en:"Celaray"},ガウルフ:{id:"26",name:"ガウルフ",en:"Direhowl"},クルットリ:{id:"27",name:"クルットリ",en:"Tocotoco"},ポプリーナ:{id:"28",name:"ポプリーナ",en:"Flopie"},ミルカルビ:{id:"29",name:"ミルカルビ",en:"Mozzarina"},イバラヒメ:{id:"30",name:"イバラヒメ",en:"Bristla"},シャーキッド:{id:"31",name:"シャーキッド",en:"Gobfin"},シャーマンダー:{id:"31B",name:"シャーマンダー",en:"Gobfin-Ignis"},シメナワ:{id:"32",name:"シメナワ",en:"Hangyu"},オバケナワ:{id:"32B",name:"オバケナワ",en:"Hangyu-Cryst"},ササゾー:{id:"33",name:"ササゾー",en:"Mossanda"},ライゾー:{id:"33B",name:"ライゾー",en:"Mossanda-Lux"},メリポップ:{id:"34",name:"メリポップ",en:"Woolipop"},ベリゴート:{id:"35",name:"ベリゴート",en:"Caprity"},メルパカ:{id:"36",name:"メルパカ",en:"Melpaca"},ツノガミ:{id:"37",name:"ツノガミ",en:"Eikthyrdeer"},ヤマガミ:{id:"37B",name:"ヤマガミ",en:"Eikthyrdeer-Terra"},ホークウィン:{id:"38",name:"ホークウィン",en:"Nitewing"},ヒメウサ:{id:"39",name:"ヒメウサ",en:"Ribunny"},ヘルゴート:{id:"40",name:"ヘルゴート",en:"Incineram"},アビスゴート:{id:"40B",name:"アビスゴート",en:"Incineram-Noct"},パピテフ:{id:"41",name:"パピテフ",en:"Cinnamoth"},ブルフェルノ:{id:"42",name:"ブルフェルノ",en:"Arsox"},トドドドン:{id:"43",name:"トドドドン",en:"Dumud"},マスクロウ:{id:"44",name:"マスクロウ",en:"Cawgnito"},ダリザード:{id:"45",name:"ダリザード",en:"Leezpunk"},チリザード:{id:"45B",name:"チリザード",en:"Leezpunk-Ignis"},ツキカゲ:{id:"46",name:"ツキカゲ",en:"Loupmoon"},エアムルグ:{id:"47",name:"エアムルグ",en:"Galeclaw"},フェザーロ:{id:"48",name:"フェザーロ",en:"Robinquill"},サンドロ:{id:"48B",name:"サンドロ",en:"Robinquill-Terra"},ゴリレイジ:{id:"49",name:"ゴリレイジ",en:"Gorirat"},ビーナイト:{id:"50",name:"ビーナイト",en:"Beegarde"},クインビーナ:{id:"51",name:"クインビーナ",en:"Elizabee"},ニャンギマリ:{id:"52",name:"ニャンギマリ",en:"Grintale"},コモップ:{id:"53",name:"コモップ",en:"Swee"},ドンモップ:{id:"54",name:"ドンモップ",en:"Sweepa"},オコチョ:{id:"55",name:"オコチョ",en:"Chillet"},ライコーン:{id:"56",name:"ライコーン",en:"Univolt"},フブキツネ:{id:"57",name:"フブキツネ",en:"Foxcicle"},サラブレイズ:{id:"58",name:"サラブレイズ",en:"Pyrin"},サラブラック:{id:"58B",name:"サラブラック",en:"Pyrin-Noct"},ツララジカ:{id:"59",name:"ツララジカ",en:"Reindrix"},イヌズマ:{id:"60",name:"イヌズマ",en:"Rayhound"},シラヌイ:{id:"61",name:"シラヌイ",en:"Kitsun"},カミナラシ:{id:"62",name:"カミナラシ",en:"Dazzi"},ミステリア:{id:"63",name:"ミステリア",en:"Lunaris"},アロアリュー:{id:"64",name:"アロアリュー",en:"Dinossom"},ビリビリュー:{id:"64B",name:"ビリビリリュー",en:"Dinossom-Lux"},シーペント:{id:"65",name:"シーペント",en:"Surfent"},スナペント:{id:"65B",name:"スナペント",en:"Surfent-Terra"},ソルレイス:{id:"66",name:"ソルレイス",en:"Maraith"},ドリタス:{id:"67",name:"ドリタス",en:"Digtoise"},ニャンバット:{id:"68",name:"ニャンバット",en:"Tombat"},ラブマンダー:{id:"69",name:"ラブマンダー",en:"Lovander"},ラヴィ:{id:"70",name:"ラヴィ",en:"Flambelle"},カバネドリ:{id:"71",name:"カバネドリ",en:"Vanwyrm"},シロカバネ:{id:"71B",name:"シロカバネ",en:"Vanwyrm-Cryst"},ツジギリ:{id:"72",name:"ツジギリ",en:"Bushi"},ライバード:{id:"73",name:"ライバード",en:"Beakon"},イグニクス:{id:"74",name:"イグニクス",en:"Ragnahawk"},クレメーオ:{id:"75",name:"クレメーオ",en:"Katress"},フォレーナ:{id:"76",name:"フォレーナ",en:"Wixen"},ラベロット:{id:"77",name:"ラベロット",en:"Verdash"},ヴィオレッタ:{id:"78",name:"ヴィオレッタ",en:"Vaelet"},シルキーヌ:{id:"79",name:"シルキーヌ",en:"Sibelyx"},シルフィア:{id:"80",name:"シルフィア",en:"Elphidran"},シルティア:{id:"80B",name:"シルティア",en:"Elphidran-Aqua"},ケルピス:{id:"81",name:"ケルピス",en:"Kelpsea"},マグピス:{id:"81B",name:"マグピス",en:"Kelpsea-Ignis"},アズレーン:{id:"82",name:"アズレーン",en:"Azurobe"},ツンドラー:{id:"83",name:"ツンドラー",en:"Cryolinx"},ゴクエンオ:{id:"84",name:"ゴクエンオ",en:"Blazehowl"},シンエンオ:{id:"84B",name:"シンエンオ",en:"Blazehowl-Noct"},ペコドン:{id:"85",name:"ペコドン",en:"Relaxaurus"},パリピドン:{id:"85B",name:"パリピドン",en:"Relaxaurus-Lux"},ラブラドン:{id:"86",name:"ラブラドン",en:"Broncherry"},スプラドン:{id:"86B",name:"スプラドン",en:"Broncherry-Aqua"},フラリーナ:{id:"87",name:"フラリーナ",en:"Petallia"},ボルカノン:{id:"88",name:"ボルカノン",en:"Reptyro"},フロスカノン:{id:"88B",name:"フロスカノン",en:"Ice-Reptyro"},アルパオー:{id:"89",name:"アルパオー",en:"Kingpaca"},アオパオー:{id:"89B",name:"アオパオー",en:"Ice-Kingpaca"},グランモス:{id:"90",name:"グランモス",en:"Mammorest"},ブリザモス:{id:"90B",name:"ブリザモス",en:"Mammorest-Cryst"},ヒエティ:{id:"91",name:"ヒエティ",en:"Wumpo"},トロピティ:{id:"91B",name:"トロピティ",en:"Wumpo-Botan"},グラクレス:{id:"92",name:"グラクレス",en:"Warsect"},ムラクモ:{id:"93",name:"ムラクモ",en:"Fenglope"},ヤミトバリ:{id:"94",name:"ヤミトバリ",en:"Felbat"},フェスキー:{id:"95",name:"フェスキー",en:"Quivern"},ボルカイザー:{id:"96",name:"ボルカイザー",en:"Blazamut"},ヘルガルダ:{id:"97",name:"ヘルガルダ",en:"Helzephyr"},ジオラーヴァ:{id:"98",name:"ジオラーヴァ",en:"Astegon"},デスティング:{id:"99",name:"デスティング",en:"Menasting"},アヌビス:{id:"100",name:"アヌビス",en:"Anubis"},レヴィドラ:{id:"101",name:"レヴィドラ",en:"Jormuntide"},アグニドラ:{id:"101B",name:"アグニドラ",en:"Jormuntide-Ignis"},スザク:{id:"102",name:"スザク",en:"Suzaku"},シヴァ:{id:"102B",name:"シヴァ",en:"Suzaku-Aqua"},エレパンダ:{id:"103",name:"エレパンダ",en:"Grizzbolt"},リリクイン:{id:"104",name:"リリクイン",en:"Lyleen"},ルナクイン:{id:"104B",name:"ルナクイン",en:"Lyleen-Noct"},ホルス:{id:"105",name:"ホルス",en:"Faleris"},ボルゼクス:{id:"106",name:"ボルゼクス",en:"Orserk"},ゼノグリフ:{id:"107",name:"ゼノグリフ",en:"Shadowbeak"},セイントール:{id:"108",name:"セイントール",en:"Paladius"},ベイントール:{id:"109",name:"ベイントール",en:"Necromus"},グレイシャル:{id:"110",name:"グレイシャル",en:"Frostallion"},グレイシャドウ:{id:"110B",name:"グレイシャドウ",en:"Frostallion-Noct"},ジェットラン:{id:"111",name:"ジェットラン",en:"Jetragon"}};export{J as _,q as a,G as e,v as g,E as i,K as o,T as u};
