<template>
<div>
<div class="add-number">
        <div class="card">
         <p>Add a new contact</p>
        <form method="post" action="/" @submit.prevent="createContact">
        <div v-bind:class="{'red':true, 'has-error': errors.name}">
           <div class="input-group">
            <!--<label class="label-custom">Name:</label>-->
            <input type="text" class="input-custom" v-model="contact.name" placeholder="Name:">
            <span class="error-text" v-for="error in errors.name" v-text="error"></span>
            </div>
        </div>
        <div v-bind:class="{'red':true, 'has-error': errors.number}">
            <div class="input-group">
             <!--<label class="label-custom"> </label>-->
            <input type="text" class="input-custom" v-model="contact.number" placeholder="Number:">
            <span class="error-text" v-for="error in errors.number" v-text="error"></span>
   
        </div>
        </div>
        <div>
            <button type="submit" class="btn-custom btn-primary-custom btn-possition">Add</button>
        </div>
   
    </form>
    </div>
</div>
<div class="contact-list">
    
    <table>
        <thead>
            <tr><th colspan="4">Contact list</th></tr>
        </thead>
        <tbody>
            <tr>

                <td>Name</td>
                <td>Number</td>
                 <td>Action</td>
                
            </tr>

            <contact v-for="contact in contacts" :key="contact.id" :contact="contact"
                     @delete-contact="deleteContact"
                     @update-contact="fecthContacts" ></contact>

        </tbody>
    </table>
</div>
</div>
</template>

<script>
    import Contact from './Contact.vue';
    export default {
        data() {
            return {
                contacts: [],
                contact: {
                    name: '',
                    number: ''
                },
                errors: []
            };
        },
        components: {
            Contact
        },
        methods: {
            createContact() {
                axios.post('/contact', this.contact)
                    .then(response => {
                        this.contacts.push(response.data.contact);
                        this.contact = {
                            name: '',
                            number: ''
                        };
                        if (this.errors) {
                            this.errors = [];
                        }
                        console.log(response.data);
                    })
                    .catch(error => {
                        this.errors = error.response.data.errors;
                    })
            },

            deleteContact(contact) {
                axios.delete('/contact/' + contact.id)
                    .then(response => {
                        let index = this.contacts.indexOf(contact);
                        this.contacts.splice(index, 1);
                        console.log(response.data);
                    })
            },

            fecthContacts() {
                axios.get('/contact')
                    .then(response => {
                        this.contacts = response.data.contacts;
                        console.log('Component mounted.')
                    })
                    .catch(error => {
                        console.log(error);
                    });

            }
        },
        mounted() {
            this.fecthContacts();
        }
    }

</script>
