import Vue from 'vue'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import '@progress/kendo-theme-material/dist/all.css'
import '@progress/kendo-ui/js/cultures/kendo.culture.pt-BR'
import { KendoDataSource, KendoDataSourceInstaller } from '@progress/kendo-datasource-vue-wrapper'
import { KendoGrid, KendoGridInstaller } from '@progress/kendo-grid-vue-wrapper'

kendo.culture('pt-BR')

Vue.use(KendoDataSourceInstaller)
Vue.use(KendoGridInstaller)

Vue.component(KendoDataSource)
Vue.component(KendoGrid)
