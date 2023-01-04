<template>
  <!-- <v-data-table :headers="headers" :items="booksName" sort-by="Author_Name" class="elevation-1"> -->
    <v-data-table :headers="headers" :items="tableData" sort-by="Author_Name" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat>
          
          <v-spacer></v-spacer>
         
          <FarmerDialog @saveBook="save"
                      @closeFarmer="close" 
                      :dialog="dialog">
          </FarmerDialog>
  
  
          <EditBookDialog @saveBook="saveEdit" 
                          @closeFarmer="closeEdit" 
                          :dialog="editDialog" 
                          :name="editedname.name" 
                          :authorName="editedname.Author_Name" 
                          :publishedDate="editedname.Published_Date" 
                          :pages="editedname.Pages">
          </EditBookDialog>
  
  
          <!-- Button_Box -->
  
          <DeleteBookDialog @deleteConfirm="deletenameConfirm" 
                            @closeDelete="closeDelete" 
                            :dialog="dialogDelete">
          </DeleteBookDialog>
  
        </v-toolbar>
      </template>
  
          <!-- action -->
  
     
    <template v-slot:[`item.actions`]="{ item }">
     
      <EditButtonVue @editEvent="editname(item)"></EditButtonVue>
  
      <DeleteButton @deleteEvent="deletename(item)"></DeleteButton>
    </template>
  
  </v-data-table>
  </template>
  
  <script>
  
  import EditButtonVue from '@/components/EditButton.vue';
  import DeleteButton from '@/components/DeleteButton.vue';
  import EditBookDialog from '@/components/EditBookDialog.vue';
  import DeleteBookDialog from '@/components/DeleteBookDialog.vue';
  import FarmerDialog from '@/components/FarmerDialog.vue';

  
  export default {
    components: {
      EditButtonVue,
      DeleteButton,
      EditBookDialog,
      DeleteBookDialog,
      FarmerDialog,
    },
  
    data: () => ({
      dialog: false,
      editDialog: false,
      dialogDelete: false,
      headers: [
        
        {text: "city",align: "start",sortable: false,value: "city",},
        { text: "county", value: "county" },
        { text: "farm_name", value: "farm_name" },
        { text: "lat ", value: "lat" },
        { text: "long ", value: "long" },
        { text: "Actions", value: "actions", sortable: false },
      ],
  
      
      tableData: [],
  
      editedIndex: -1,
      editedname: {
        city: "",
        county:"",
        farm_name:"",
        lat: "",
        long: "",
      },
  
      defaultname: {
        city: "",
        county:"",
        farm_name:"",
        lat: "",
        long: "",
      },
      
    }),
  
    computed: {
      formTitle() {
         return this.editedIndex === -1 ? 'New name' : 'Edit name'
        },
    },
  
    watch: {
      dialog(val) {
        val || this.close();
      },
      dialogDelete(val) {
        val || this.closeDelete();
      },
    },
  
    // created() {
    //   this.initialize();
    // },
    async created() {
     
      this.initialize();
     const response = await fetch("https://lugg9ewkq6.execute-api.us-east-1.amazonaws.com/Test/farm", {
     method: 'GET',
     headers: {
         'Accept': 'application/json',
     },
  });
     const Item = await response.json();
     const arr=[];
     Item.Items.map((element)=>arr.push(element));
     const Itemd=JSON.parse(JSON.stringify(arr));
  
     this.tableData = Itemd;
  
     console.log(this.Item)
   },
  
    methods: {
  
      changeName(item) {
        
      },
      initialize() {
      
      },
  
      editname(item) {
        this.editedIndex = this.tableData.indexOf(item);
        this.editedname = Object.assign({}, item);
        this.editDialog = true;
        
      },
  
      deletename(item) {
        
        this.editedIndex = this.tableData.indexOf(item);
        this.editedname = Object.assign({}, item);
        this.dialogDelete = true;
      },
  
      deletenameConfirm() {
        this.tableData.splice(this.editedIndex, 1);
        this.closeDelete();
      },
  
      close() {
        this.dialog = false;
        this.$nextTick(() => {
          this.editedname = Object.assign({}, this.defaultname);
          this.editedIndex = -1;
        });
      },
      closeEdit() {
        this.editDialog = false;
        this.$nextTick(() => {
          this.editedname = Object.assign({}, this.defaultname);
          this.editedIndex = -1;
        });
      },
  
      closeDelete() {
        this.dialogDelete = false;
        this.$nextTick(() => {
          this.editedname = Object.assign({}, this.defaultname);
          this.editedIndex = -1;
        });
      },
  
      save(item) {
        if (this.editedIndex > -1) {
          Object.assign(this.tableData[this.editedIndex], this.editedname);
        } else {
          this.tableData.push(item);
        }
        this.close();
      },
      saveEdit(item) {
        
        Object.assign(this.tableData[this.editedIndex], item);
        },
    },
  };
  </script>
  