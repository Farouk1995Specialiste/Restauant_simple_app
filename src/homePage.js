/* -----------------------------------------------------------------------
 * <copyright company="Microsoft Corporation">
 *   Copyright (c) Microsoft Corporation.  All rights reserved.
 * </copyright>
 * ----------------------------------------------------------------------- */

export function homePage(){
const content = document.getElementById('content');
const homePage = document.createElement('div');
homePage.classList.add('home','active')
homePage.classList.add('page');
const h2 = document.createElement('h2');
h2.textContent = `enjoy our food`;
const span1  = document.createElement('span');
const span2  = document.createElement('span');
span1.classList.add('sp')
span2.classList.add('sp')

const p = document.createElement('p');
p.textContent = `Only the best ingredients for our dishes`;



homePage.appendChild(span1);
homePage.appendChild(h2);
homePage.appendChild(span2);
homePage.appendChild(p);

content.appendChild(homePage)

}
