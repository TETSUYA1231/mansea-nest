<template>
	<div>
		<h3>目录列表</h3>
		<div>
			<el-button
				type="success"
				size="default"
				@click="$router.push('/categorys/create')"
				>创建目录</el-button
			>
		</div>
		<el-table :data="data.data" border stripe>
			<el-table-column
				v-for="(field, name) in fields"
				:prop="name"
				:key="name"
				:label="field.label"
				:width="field.width"
			>
			</el-table-column>
			<el-table-column label="操作" :width="200">
				<template v-slot="{ row }">
					<el-button
						type="primary"
						size="small"
						@click="$router.push(`/categorys/edit/${row._id}`)"
						>编辑
					</el-button>
					<el-button type="danger" size="small" @click="remove(row)"
						>删除
					</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class CategoryList extends Vue {
	data = {}
	fields = {
		_id: { label: 'ID' },
		name: { label: '目录名称' },
	}

	async fetch() {
		const res = await this.$http.get('categorys')
		this.data = res.data
	}

	async remove(row: any) {
		try {
			await this.$confirm('是否确认删除？')
		} catch (e) {
			return
		}
		await this.$http.delete(`categorys/${row._id}`)
		this.$message.success('删除成功!')
		this.fetch()
	}

	created() {
		this.fetch()
	}
}
</script>

<style>
</style>