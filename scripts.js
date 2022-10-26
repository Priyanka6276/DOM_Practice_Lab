var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];

const mainEl = document.querySelector('main')

mainEl.style.backgroundColor = '#4a4e4d'

mainEl.innerHTML = '<h1> SEI Rocks! </h1>'

mainEl.classList.add('flex-ctr')

const topMenuEl = document.getElementById('top-menu')

topMenuEl.style.height = '100%'

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

topMenuEl.classList.add('flex-around')

//=====================================3.1======================================


menuLinks.forEach((link) => {
  const newATag = document.createElement('a')
  newATag.setAttribute('href', link.href)
  newATag.textContent = link.text
  topMenuEl.append(newATag)
  // console.log(newATag)
})

//=====================================4.0======================================

const subMenuEl = document.getElementById('sub-menu')

//=====================================4.1======================================

subMenuEl.style.height = '100%'

//=====================================4.2======================================

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'

//=====================================4.3======================================

subMenuEl.classList.add('flex-around')

//=====================================4.4======================================

subMenuEl.style.position = 'absolute'

//=====================================4.5======================================

subMenuEl.style.top = '0'

//=====================================5.1======================================

const topMenuLinks = document.querySelectorAll('#top-menu > a')


let showingSubMenu = false

//=====================================5.2======================================

topMenuEl.addEventListener('click', (evt) => {
  evt.preventDefault()
  if (evt.target.tagName !== 'A') {
    // console.log('false')
    return
  }
  //=====================================5.3======================================

  if (evt.target.classList.contains('active')) {
    evt.target.classList.remove('active') //note to self i forgot to put classList, and clicking on the menu title twice removed it, but adding classList fixed it :)
    showingSubMenu = false
    subMenuEl.style.top = '0'
    return
  }

  //=====================================5.4======================================

  topMenuLinks.forEach((arg) => {
    arg.classList.remove('active')
    // console.log(arg);
  })

  //=====================================5.5======================================

  evt.target.classList.add('active')


  //=====================================5.6======================================


  for (let i = 0; i < menuLinks.length; i++) {
    // console.log('menuLinks')
    if (evt.target.textContent === menuLinks[i].text) {
      showingSubMenu = menuLinks[i].hasOwnProperty('subLinks')
      // console.log(menuLinks[i])
    }
  }
  //=====================================5.7======================================
  const linkObj = menuLinks.find(function (sublinkObj) {
    return sublinkObj.text === evt.target.textContent
  })

  // console.log(linkObj.subLinks)

  if (showingSubMenu.valueOf('sub-menu')) {
    subMenuEl.style.top = '100%'
    buildSubMenu(linkObj.subLinks)
    // console.log('true')
  } else {
    subMenuEl.style.top = '0%'
  }


  //=====================================5.8======================================

  function buildSubMenu(subLinkArray) {
    subMenuEl.innerHTML = '' // this clears it
    subLinkArray.forEach((subLink) => {
      let aEl = document.createElement('A') //note to self I had ('a') instead and it didn't work
      aEl.setAttribute('href', subLink.href)
      aEl.textContent = subLink.text
      subMenuEl.append(aEl)
      // console.log(aEl)
    })


    //my messy testing code 

    // let aEl = subMenuEl.querySelectorAll('a')
    // console.log(aEl)
    // for (let j = 0; j < aEl.length; j++) {
    //   if (aEl[j].getAttribute('href') === '#') {
    //     aEl.setAttribute('subLinks', linkArray.text)
    //     aEl.textContent = subLinkArray.text
    //     subMenuEl.append(aEl)
    //   }
    // }
  }




  // console.log(menuLinks[i])
  // console.log(menuLinks[i].subLinks)
  // console.log(menuLinks[i].hasOwnProperty('subLinks'))

  // showingSubMenu = menuLinks[i].hasOwnProperty('subLinks')

  // if (menuLinks[i].hasOwnProperty('subLinks')) {
  //   console.log(menuLinks[i].subLinks)
  // //   return
  // } 



  // if (evt.target.getAttribute('href') === '#') {
  //   showingSubMenu = true
  //   // console.log(showingSubMenu)
  //   buildSubMenu(linkObj)

  // } else {
  //   showingSubMenu = false
  //   // console.log(showingSubMenu)
  // }

  // const linkObj = menuLinks.find(function (sublinkObj) {
  //   return sublinkObj.text === evt.target.textContent
  // })
  // console.log(linkObj)



  // if (evt.target.getAttribute('href') === '#') {
  //   showingSubMenu = true
  //   console.log(showingSubMenu)
  //   buildSubMenu(linkObj)
  // } else {
  //   showingSubMenu = false
  //   console.log(showingSubMenu)
  // }

  // if (showingSubMenu = true) { 
  //   subMenuEl.style.top = '100%'
  // } else {
  //   subMenuEl.style.top = '0%'
  // }

  //=====================================6.4====================================== 
  if (evt.target.text === 'about'){
    mainEl.innerHTML = `<h1>${evt.target.text}</h1>`
  }

  //this didn't work in the below event listener


})

//=====================================6.0======================================

subMenuEl.addEventListener('click', (event) => {
  event.preventDefault()
  if (event.target.tagName !== 'A') {
    // console.log('false')
    return
  }
  //=====================================6.1====================================== 

  showingSubMenu = false
  subMenuEl.style.top = '0%'

  //=====================================6.2====================================== 
  topMenuLinks.forEach((arg) => {
    arg.classList.remove('active')
    // console.log(arg);
  })

  //=====================================6.3====================================== 
  // console.log('hi')

  mainEl.innerHTML = `<h1>${event.target.text}</h1>`

  // console.log(mainEl.innerHTML = `<h1> ${menuLinks[0]} </h1>`)

})
