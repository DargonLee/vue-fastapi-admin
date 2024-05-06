<template>
  <AppPage :show-footer="false">
    <div flex-1>
      <n-card rounded-10>
        <div flex items-center justify-between>
          <div flex items-center>
            <img rounded-full width="60" :src="userStore.avatar" />
            <div ml-10>
              <p text-20 font-semibold>
                {{ $t('views.workbench.text_hello', { username: userStore.name }) }}
              </p>
              <p mt-5 text-14 op-60>{{ $t('views.workbench.text_welcome') }}</p>
            </div>
          </div>
          <n-space :size="12" :wrap="false">
            <n-statistic v-for="item in statisticData" :key="item.id" v-bind="item"></n-statistic>
          </n-space>
        </div>
      </n-card>

      <CommonPage show-footer title="ABM列表">
        <template #action>
          <div>
            <n-upload action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f" :default-upload="false"
              @change="handleChange">
              <NButton v-permission="'post/api/v1/menu/create'" type="primary">
                <TheIcon icon="material-symbols:add" :size="18" class="mr-5" />导入文件
              </NButton>
            </n-upload>
          </div>
        </template>

        <!-- 表格 -->
        <CrudTable ref="$table" :columns="columns" :get-data="api.getFiles">
          <template #queryBar>
            <QueryBarItem label="名称" :label-width="40">
              <NInput v-model:value="queryItems.username" clearable type="text" placeholder="请输入用户名称"
                @keypress.enter="$table?.handleSearch()" />
            </QueryBarItem>
            <QueryBarItem label="邮箱" :label-width="40">
              <NInput v-model:value="queryItems.email" clearable type="text" placeholder="请输入邮箱"
                @keypress.enter="$table?.handleSearch()" />
            </QueryBarItem>
          </template>
        </CrudTable>
      </CommonPage>

    </div>
  </AppPage>
</template>

<script setup>
import api from '@/api'
import { h, onMounted, ref, resolveDirective, withDirectives } from 'vue'
import { NButton, NTag, NInput } from 'naive-ui'
import { renderIcon } from '@/utils'
import { useUserStore } from '@/store'
import { useI18n } from 'vue-i18n'
import { useMessage } from 'naive-ui'
import CrudTable from '@/components/table/CrudTable.vue'
const message = useMessage()
const { t } = useI18n({ useScope: 'global' })
const dummyText = '一个基于 Vue3.0、FastAPI、Naive UI 的轻量级后台管理模板'

const statisticData = computed(() => [
  {
    id: 0,
    label: t('views.workbench.label_number_of_items'),
    value: '25',
  },
  {
    id: 1,
    label: t('views.workbench.label_upcoming'),
    value: '4/16',
  },
  {
    id: 2,
    label: t('views.workbench.label_information'),
    value: '12',
  },
])

async function handleChange(options) {
  console.log(options)
  let formData = new FormData();
  formData.append("file", options.file.file);
  formData.append("tpye", options.file.tpye);
  console.log(formData)
  await api
    .uploadFile("abm_excel", formData)
    .then((res) => {
      message.success(res.msg)
    })
    .catch(() => {
    })
}
const userStore = useUserStore()


const $table = ref(null)
const queryItems = ref({})
const vPermission = resolveDirective('permission')
onMounted(() => {
  $table.value?.handleSearch()
})
const columns = [
  {
    title: 'ID',
    key: 'id',
    width: 'auto',
    align: 'center',
    ellipsis: { tooltip: true },
  },
  {
    title: '购买者',
    key: 'username',
    align: 'center',
    width: 'auto',
    ellipsis: { tooltip: true },
  },
  {
    title: '创建时间',
    key: 'created_at',
    width: 'auto',
    align: 'center',
    ellipsis: { tooltip: true },
  },
  {
    title: '安装时间',
    key: 'installed_at',
    width: 'auto',
    align: 'center',
    ellipsis: { tooltip: true },
  },
  {
    title: '状态',
    key: 'is_active',
    width: 'auto',
    align: 'center',
    ellipsis: { tooltip: true },
    render(row) {
      return h(
        NTag,
        { type: row.is_active ? 'success' : 'info', style: { margin: '2px 3px' } },
        { default: () => (row.is_active ? '未安装' : '已安装') }
      )
    },
  },
  {
    title: '兑换码',
    key: 'abm_code',
    width: 'auto',
    align: 'center',
    ellipsis: { tooltip: true },
  },
  {
    title: '二维码',
    key: 'abm_link',
    width: 'auto',
    align: 'center',
    fixed: 'right',
    render(row) {
      return [
        withDirectives(
          h(
            NButton,
            {
              size: 'small',
              type: 'primary',
              style: 'margin-right: 8px;',
              onClick: () => {
              },
            },
            {
              default: () => '查看',
              icon: renderIcon('material-symbols:edit', { size: 16 }),
            }
          ),
          [[vPermission, 'post/api/v1/file/update']]
        )
      ]
    },
  },
]
</script>
