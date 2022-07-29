import { Injectable } from '@angular/core';
import {ListInvitations} from "./ListInvitations";


@Injectable({
  providedIn: 'root'
})
export class ListInvitationsService {

  listInvitations: ListInvitations[] = [
    {
      id: '7694f4a66316e53c8cdd9d9954bd611d',
      name: ['Cheo', 'Marisol', 'Jose Alejandro'],
      title: 'Cheo'
    },
    {
      id: 'f1290186a5d0b1ceab27f4e77c0c5d68',
      name: ['Adonis', 'Michel', 'Sra Jhoana', 'Jose Molina', '2 Niños'],
      title: 'Adonis'
    },
    {
      id: 'e1671797c52e15f763380b45e841ec32',
      name: ['Armeña'],
      title: 'Armena'
    },
    {
      id: '4b43b0aee35624cd95b910189b3dc231',
      name: ['Guillermo'],
      title: 'Guillermo'
    },
    {
      id: 'e358efa489f58062f10dd7316b65649e',
      name: ['Demetrio'],
      title: 'Demetrio'
    },
    {
      id: '415290769594460e2e485922904f345d',
      name: ['Demir', 'Miriam', 'Brayan'],
      title: 'Demir'
    },
    {
      id: '7b774effe4a349c6dd82ad4f4f21d34c',
      name: ['Rita', 'Luis Z.'],
      title: 'Nona rita'
    },
    {
      id: '865c0c0b4ab0e063e5caa3387c1a8741',
      name: ['Yorsy', 'Wendy', 'Isabella', 'Fernando'],
      title: 'Yorsy'
    },
    {
      id: 'd95679752134a2d9eb61dbd7b91c4bcc',
      name: ['Maylin', 'Yoel', 'Yoelito', 'Diana'],
      title: 'Yoel'
    },
    {
      id: '83878c91171338902e0fe0fb97a8c47a',
      name: ["Wendy S", 'Jorge'],
      title: 'Wendy'
    },
    {
      id: '0cc175b9c0f1b6a831c399e269772661',
      name: ['Carlos', 'Emmanuel', 'Xiomara Zambrano'],
      title: 'Xiomara'
    },
    {
      id: '03c7c0ace395d80182db07ae2c30f034',
      name: ['Hilda Pineda', 'Luz Luna'],
      title: 'Hilda'
    },
    {
      id: '8277e0910d750195b448797616e091ad',
      name: ['Luis', 'Gloria', 'Luis Alejandro'],
      title: 'Tio Luis'
    },
    {
      id: '8fa14cdd754f91cc6554c9e71929cce7',
      name: ['Elean'],
      title: 'Elean'
    },
    {
      id: 'b2f5ff47436671b6e533d8dc3614845d',
      name: ['Madelcris', 'Wilmer', 'Sol', 'Ashley', 'Alan'],
      title: 'Madelcris'
    },
    {
      id: '2510c39011c5be704182423e3a695e91',
      name: ['Jaksel'],
      title: 'Jaksel'
    },
    {
      id: '363b122c528f54df4a0446b6bab05515',
      name: ['Marielis', 'Renzo'],
      title: 'Marielis'
    },
    {
      id: '8ce4b16b22b58894aa86c421e8759df3',
      name: ['Jessica'],
      title: 'Jessica'
    },
    {
      id: '2db95e8e1a9267b7a1188556b2013b33',
      name: [
        'Wilson',
        'Adonias',
        'Steven',
        'Leydy',
        'Fabian Valencia',
        'Fabian Farizo'
      ],
      title: 'Grupo de pendejos'
    },
    {
      id: 'fbade9e36a3f36d3d676c1b808451dd7',
      name: ['Kelly'],
      title: 'Kelly'
    },
    {
      id: '9dd4e461268c8034f5c8564e155c67a6',
      name: ['Marcelo', 'Diana'],
      title: 'Marcelo'
    },
    {
      id: '4a8a08f09d37b73795649038408b5f33',
      name: ['Wiliana', 'Wilianny'],
      title: 'Wiliana'
    },
    {
      id: '9e3669d19b675bd57058fd4664205d2a',
      name: ['Jeffrey', 'Eliana'],
      title: 'Devs - Jeffrey'
    },
    {
      id: '92eb5ffee6ae2fec3ad71c777531578f',
      name: ['Wonder'],
      title: 'Devs - Wonder'
    },
    {
      id: '92eb5ffee6aeskdjvuis8348931c777531578f',
      name: ['Carlos'],
      title: 'Devs - Carlos'
    },
    {
      id: '7b8b965ad4bca0e41ab51de7b31363a1',
      name: ['Mauricio'],
      title: 'Devs - Mauricio'
    },
    {
      id: '6f8f57715090da2632453988d9a1501b',
      name: ['Yubelka'],
      title: 'Devs - Yubelka'
    },
    {
      id: '37f31694ce2528a64cfacc73c612ef06',
      name: ['Yexibel', 'Jose Miguel'],
      title: 'Devs - Yexibel y Jose Miguel'
    },
    {
      id: 'deaedcf7f93220ea820b271df39eb516',
      name: ['Daniel'],
      title: 'Devs - Daniel'
    },
    {
      id: 'fb9a0d9e55d22560701a272383c6ff80',
      name: ['Jesús'],
      title: 'Devs - Jesús'
    },
    {
      id: '073a053fa576e3e15891423b5bb63772',
      name: ['Gregory'],
      title: 'Devs - Gregory'
    },
    {
      id: '2681be5677c3c564820ef9c5beeb8052',
      name: ['Jesús', 'Lucia', 'Victoria'],
      title: 'Jesús Luna'
    },
    {
      id: '29a47eb64c0f63bf7f20ffd7b06ecccb',
      name: ['Moisés'],
      title: 'Moisés'
    },
    {
      id: '7fe7e82bb196cbdf46d9adbb8ed07ffe',
      name: ['Aleifer', 'Kathy', 'Santiago', 'Alexandra'],
      title: 'Aleifer'
    },
    {
      id: 'ca9a4deae465db4c19e35af0cc278869',
      name: ['Norelia'],
      title: 'Norelia'
    },
    {
      id: 'dc771c62b2348079da2c6ef2442a4ac8',
      name: ['Cheyla', 'Deimar', 'Yinnet'],
      title: 'Cheyla'
    },
    {
      id: 'f3c555f220b05696e3f87a35f2b4f35d',
      name: ['Jose Daniel'],
      title: 'Jose Daniel'
    },
    {
      id: 'f3c555f2hgvrtcyi9767835f2b4f35d',
      name: ['Antonio Hajjat'],
      title: 'Tony'
    },
    {
      id: 'f44445f2hgvrtcyi9767835f2bnf35d',
      name: ['Diego Roeder'],
      title: 'Diego'
    },
       {
      id: 'f44445f2rgg2i9767835f2bnf35d',
      name: ['Marlon Posada'],
      title: 'Marlon'
    },
     {
      id: 'f44445f2rgg2gg3835f2bnf35v',
      name: ['David Romero'],
      title: 'David'
    },
      {
      id: 'f44445f2rgg2gg3835f2bnf11a',
      name: ['Pedro Moreno'],
      title: 'Pedro'
    },
     {
      id: 'f44445f2rgg2gg3835f2b231b',
      name: ['Leifer Mendez', 'Mariana Rolfo', 'Estela Olguin'],
      title: 'Leifer'
    },
    {
      id: 'd32145f2rgg2gg3835f2bnf11a',
      name: ['Makarena Gónzalez y familia'],
      title: 'Maka'
    },
     {
      id: 'd321664v2gg3835f2v44s',
      name: ['Rosalbita', 'Maria Gabriela'],
      title: 'Rosalba'
    },
    {
      id: 'd321664v2gg383fd431',
      name: ['José Manuel'],
      title: 'Jose Manuel'
    },
     {
      id: 'd321664v2gg383frrv1',
      name: ['Maria Luisa Benitez y José Guerrero'],
      title: 'Maria Luisa'
    },
    {
      id: 'g321654v2gg383frr44',
      name: ['José Alberto', 'Gabriela' ],
      title: 'Rebeco'
    },
  ];
}
