/* -----------------------------------------------------------------------
 * <copyright company="Microsoft Corporation">
 *   Copyright (c) Microsoft Corporation.  All rights reserved.
 * </copyright>
 * ----------------------------------------------------------------------- */

export function aboutPage(){
    const content = document.getElementById('content');
 const container = document.createElement('div');
 container.classList.add('about','page')
 const phone = document.createElement('span');
 phone.textContent = '+21655979998'

 const iconPhone = document.createElement('span');
 iconPhone.innerHTML = ' <i class="fas fa-phone"></i>'

 const divPhone = document.createElement('div');

 divPhone.appendChild(iconPhone);
 divPhone.appendChild(phone);

 const  adress = document.createElement('span');
 adress.textContent = 'Marsa,BIG__CHICKEN && GDS';

const addressIcon =  document.createElement('span');
addressIcon.innerHTML = `<i class="fa-solid fa-location-dot"></i>`

const divAdr = document.createElement('div');
divAdr.appendChild(addressIcon);
divAdr.appendChild(adress);

 container.appendChild(divPhone);
 container.appendChild(divAdr)
 content.appendChild(container)
}