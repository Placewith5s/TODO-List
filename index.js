"use strict";
(() => {
    document.addEventListener("DOMContentLoaded", () => {
        class TODO_List {
            constructor () {
                this.main = document.querySelector("main");
                this.title = document.querySelector("#title");
                this.add_btn = document.querySelector("#add-btn");

                // create the list's parent
                this.new_list_parent = document.createElement("ul");
                this.new_list_parent.className = "added-lists";
                this.main.append(this.new_list_parent);

                if (this.main || !this.title || !this.add_btn || !this.new_list_parent) {
                    console.warn("Missing items!");
                } else {
                    console.log("Items found");
                }
                this.add_btn.addEventListener("click", () => {
                    this.search_func();
                });
            }

            search_func() {
                try {
                    // create the new list
                    this.new_list = document.createElement("li");
                    this.new_list_parent.append(this.new_list);

                    // create the remove button
                    this.remove_btn = document.createElement("button");
                    this.remove_btn.textContent = "Remove";
                    this.remove_btn.type = "button";
                    this.remove_btn.id = "remove-btn";
                    this.remove_btn.ariaLabel = this.remove_btn.textContent;
                    this.main.append(this.remove_btn);
                    this.remove_list_n_btn();

                    // empty input value handler
                    if (this.title.value.trim() != "") { // make space count as empty
                        this.new_list.textContent = this.title.value;
                    } else {
                        console.warn("Write a value before clicking on 'Add'!")
                        this.new_list.remove();
                        this.remove_btn.remove();
                    }
                } catch (err) {
                    console.error("Cannot create elements:", err);
                }
            }

            remove_list_n_btn() {
                this.remove_btn.addEventListener("click", () => {
                    this.new_list.remove();
                    this.remove_btn.remove();
                });
            }
        }
        // call the class
        new TODO_List;
    });
})();