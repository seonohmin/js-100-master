;(function () {
  'use strict'
  const get = (target) => {
    return document.querySelector(target)
  }

  const $button = get('.modal_open_button')
  const $modalConfirmButton = get('.modal_button.confirm')
  const $modalCancelButton = get('.modal_button.cancel')
  const $modal = get('.modal')
  const $body = get('body')
  

  const toggleModal = () => {
    $modal.classList.toggle('show')
    $body.classList.toggle('scroll_lock')
  }

  $modalConfirmButton.addEventListener('click', () => {
    toggleModal()
  })

  $modalCancelButton.addEventListener('click', () => {
    toggleModal()
  })

  $button.addEventListener('click', () => {
    toggleModal()
  })

  window.addEventListener('click', (e) => {
    if (e.target === $modal) {
      toggleModal()
    }
  })
})()
