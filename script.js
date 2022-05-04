const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function showContent(){
  // remove tab border
  removeBorder()
  this.classList.add('tab-border')

  // remove tab content
  removeTabContent()
  const tabContentItem = document.querySelector(`#${this.id}-content`)
  tabContentItem.classList.add('show')
  // console.log(this.id)
}

function removeBorder(){
  tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removeTabContent(){
  tabContentItems.forEach(item => item.classList.remove('show'))
}

tabItems.forEach(item => {
  item.addEventListener('click', showContent)
})
