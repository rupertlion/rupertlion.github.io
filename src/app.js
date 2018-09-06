const storage = window.localStorage

const renderContacts = () => {
  const contacts = JSON.parse(storage.getItem('contacts'))
  let div = document.querySelector('.contact-list')
  if (contacts) {
    div.innerHTML = ''
    const ul = document.createElement('ul')
    contacts.forEach(contact => {
      let contactcard = document.createElement('contactcard')
        contactcard.innerHTML = `
            <div class="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden mt-6 py-6">
                <div class="sm:flex sm:items-center px-6 py-4">
                    <img class="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://avatars.io/twitter/${ contact.twitter}" alt="">
                    <div class="text-center sm:text-left sm:flex-grow">
                        <div class="mb-4">
                            <p class="text-xl leading-tight">${ contact.name }</p>
                            <p class="text-lg leading-tight text-grey-dark">${ contact.company}</p>
                            <p class="text-base leading-tight text-grey-dark">${ contact.email}</p>
                            <a class="text-base leading-tight text-grey-dark" href="https://www.twitter.com/${ contact.twitter}">@${contact.twitter}</a>
                            <p class="text-sm leading-tight text-grey-dark">${ contact.notes}</p>
                        </div>
                    </div>
                    <div>
                        <a href="mailto:${contact.email}" class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white">Email me</a>
                    </div>
                </div>
            </div>
      `
    ul.appendChild(contactcard)
    })
    div.appendChild(ul)
  } else {
    div.innerHTML = `
      <div class="container w-1/2 mx-auto mt-6">
        <div class="sm:flex sm:items-center">  
            <div class="w-full md:w-full px-3">  
              <div class="bg-orange-lightest border-l-4 border-orange text-orange-dark p-4" role="alert">
                <p class="text-center">You have no contacts in your address book</p>
                <p class="text-center">Please add contacts above</p>
              </div>
            </div>
        </div>
      </div>
    `
  }
}

  document.addEventListener('DOMContentLoaded', () => {
    renderContacts()
    const addContactForm = document.querySelector('.new-contact-form')
   
    addContactForm.addEventListener('submit', event => {
      event.preventDefault()
      
  
      const {
        name,
        email,
        phone,
        company,
        notes,
        twitter,
      } = addContactForm.elements
  
      const contact = {
        id: Date.now(),
        name: name.value,
        email: email.value,
        phone: phone.value,
        company: company.value,
        notes: notes.value,
        twitter: twitter.value,
      }
      console.log(`Saving the following contact: ${JSON.stringify(contact)}`);
        
      let contacts = JSON.parse(storage.getItem('contacts')) || []
      contacts.push(contact)
      storage.setItem('contacts', JSON.stringify(contacts))
      renderContacts()
      addContactForm.reset()
  })
  })

