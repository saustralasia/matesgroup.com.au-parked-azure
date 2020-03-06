<template>

    <tr>
   <!--      <td>{{contact.id}}</td> -->
        <td>
            <input v-if="edit" v-model="editForm.name" type="text" class="edit-input">
            <span v-else>{{contact.name}}</span>
        </td>

        <td>
            <input v-if="edit" v-model="editForm.number" type="text" class="edit-input">
            <span v-else>{{contact.number}}</span>
        </td>
        <td>
            <button v-if="!edit" @click="editContact" class="action-btn-edit">Edit</button>
            <button v-else="edit" @click="cancleEditContact"  class="action-btn green">Cancel</button>

            <button v-if="edit" @click="updateContact(contact, editForm)"  class="action-btn-edit">Update</button>
            <button v-if="!edit" @click="$emit('delete-contact', contact)"  class="action-btn">Delete</button>
        </td>
           <br><br>
    </tr>

</template>


<script>
export default {
    props:['contact'],
    data() {
        return {
            edit: false,
            editForm: {
                name: '',
                number: ''
            }
        }
    },
    methods: {
        editContact() {
            this.edit = true;
            this.editForm.name = this.contact.name;
            this.editForm.number = this.contact.number;
        },
        cancleEditContact() {
            this.edit = false;
            this.editForm.name = '';
            this.editForm.number = '';

        },
        updateContact(oldContact, newContact) {
            axios.patch('/contact/' + oldContact.id, newContact)
                .then(response => {
                    this.edit = false;
                    this.$emit('update-contact');
                    console.log(response.data);
                });
        }
    }

}
</script>