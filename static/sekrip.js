
     async function getProductEntries(){
        return fetch("{% url 'main:show_json' %}").then((res) => res.json())
    }
    function addProductEntry() {
        fetch("{% url 'main:add_product_ajax' %}", {
          method: "POST",
          body: new FormData(document.querySelector('#productEntryForm')),
        })
        .then(response => refreshProductEntries())
    
        document.getElementById("productEntryForm").reset(); 
        document.querySelector("[data-modal-toggle='crudModal']").click();
    
        return false;
    }

    async function refreshProductEntries() {
        document.getElementById("product_entry_cards").innerHTML = "";
        document.getElementById("product_entry_cards").className = "";
        const productEntries = await getProductEntries(); // This should be an API call or function that fetches product data
        let htmlString = "";
        let classNameString = "";
    
        if (productEntries.length === 0) {
            classNameString = "flex flex-col mt-8 justify-center items-center";
            htmlString = `
                <div class="flex flex-col mt-8 justify-center items-center">
                    <img src="{% static 'image/pjaw.gif' %}" alt="Sad face" class="w-28 h-auto mb-4 object-contain" />
                    <p class="text-blue-700 mt-4">Belum ada data barang pada Suisei Shop.</p>
                </div>
            `;
        } else {
            classNameString = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6";
            productEntries.forEach((item) => {
                const name = DOMPurify.sanitize(item.fields.name);
                const price = DOMPurify.sanitize(item.fields.price);
                const stock = DOMPurify.sanitize(item.fields.stock);
                const description = DOMPurify.sanitize(item.fields.description);
                const category = DOMPurify.sanitize(item.fields.category);
                htmlString += `
                    <div class="relative rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-2 border-blue-500 bg-blue-100">
                        <!-- Action Buttons -->
                        <div class="absolute top-3 right-3 flex space-x-2">
                            <!-- Edit Button -->
                            <a href="/edit-product/${item.pk}" class="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                </svg>
                            </a>
                            <!-- Delete Button -->
                            <a href="/delete/${item.pk}" class="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
    
                        <!-- Product Details -->
                        <div class="p-6">
                            <h2 class="text-3xl font-semibold mb-2 text-blue-800 pb-3">${name}</h2>
                            <p class="text-gray-700 mb-1"><strong>Price:</strong> $${price}</p>
                            <p class="text-gray-700 mb-1"><strong>Stock:</strong> ${stock}</p>
                            <p class="text-gray-700 mb-2"><strong>Description:</strong> ${description}</p>
                            <p class="text-gray-700"><strong>Category:</strong> ${category}</p>
                        </div>
                    </div>
                `;
            });
        }
    
        document.getElementById("product_entry_cards").className = classNameString;
        document.getElementById("product_entry_cards").innerHTML = htmlString;
    }
    refreshProductEntries();

    // Show the modal with smooth transitions
    const modal = document.getElementById('crudModal');
    const modalContent = document.getElementById('crudModalContent');
  
    function showModal() {
        const modal = document.getElementById('crudModal');
        const modalContent = document.getElementById('crudModalContent');
  
        modal.classList.remove('hidden'); 
        setTimeout(() => {
          modalContent.classList.remove('opacity-0', 'scale-95');
          modalContent.classList.add('opacity-100', 'scale-100');
        }, 50); 
    }
  
    function hideModal() {
        const modal = document.getElementById('crudModal');
        const modalContent = document.getElementById('crudModalContent');
  
        modalContent.classList.remove('opacity-100', 'scale-100');
        modalContent.classList.add('opacity-0', 'scale-95');
  
        setTimeout(() => {
          modal.classList.add('hidden');
        }, 150); 
    }
  
    document.getElementById("cancelButton").addEventListener("click", hideModal);
    document.getElementById("closeModalBtn").addEventListener("click", hideModal);

    document.getElementById("productEntryForm").addEventListener("submit", (e) => {
        e.preventDefault();
        addProductEntry();
    })