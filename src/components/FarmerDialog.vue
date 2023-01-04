<template>
    <v-dialog v-model="dialog" max-width="300px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="Black" dark class="mb-2" v-bind="attrs" v-on="on">
          New Farmer
        </v-btn>
        {{ formTitle }}
      </template>
  
      <v-card>
        <v-card-title>
          <span class="text-h5">Add New Farmer</span>
        </v-card-title>
  
        <v-card-text>
          <v-container>
            <v-row>
              <v-text-field
                v-model="editedname.city"
                label="city"
              ></v-text-field>
  
              <v-text-field
                v-model="editedname.county"
                label="county"
              ></v-text-field>
  
              <v-text-field
                v-model="editedname.farm_name"
                label="farm_name"
              ></v-text-field>
  
              <v-text-field
                v-model="editedname.lat"
                label="lat"
              ></v-text-field>
              <v-text-field
                v-model="editedname.long"
                label="long"
              ></v-text-field>
            </v-row>
          </v-container>
        </v-card-text>
  
        <!-- Edit Botton Box  -->
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="close">Cancel</v-btn>
  
          <v-btn color="success" text @click="saveFarmer">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  <script>
  export default {
    setup() {},
    props: ['dialog', 'likes', 'name'],
  
    data: () => ({
      dialogDelete: false,
      name_Name: [],
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
  
    methods: {
      saveFarmer() {
        this.close()
        this.$emit('saveFamer', this.editedname)
        this.$nextTick(() => {
          this.editedname = Object.assign({}, this.defaultname)
        })
      },
  
      close() {
        this.$emit('closeBook')
      },
    },
  }
  </script>
  