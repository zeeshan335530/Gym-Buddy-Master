import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="tabs"
export default class extends Controller {
  static targets = ["tab", "tab2", "content", "content2"]

  connect() {
    // Default state:
    // Pending Requests tab visible
    this.tab2Target.classList.add("active")
    this.tabTarget.classList.remove("active")

    this.content2Target.classList.remove("d-none")
    this.contentTarget.classList.add("d-none")
  }

  activeClass(event) {
    event.preventDefault()

    // Clicked "Your GymBuddies"
    if (event.currentTarget === this.tabTarget) {

      this.tabTarget.classList.add("active")
      this.tab2Target.classList.remove("active")

      this.contentTarget.classList.remove("d-none")
      this.content2Target.classList.add("d-none")
    }

    // Clicked "Pending Requests"
    if (event.currentTarget === this.tab2Target) {

      this.tab2Target.classList.add("active")
      this.tabTarget.classList.remove("active")

      this.content2Target.classList.remove("d-none")
      this.contentTarget.classList.add("d-none")
    }
  }
}