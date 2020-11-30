<template>
	<div>
		<h3>{{ isNew ? '创建' : '编辑' }}目录</h3>
		<ele-form :form-data="data" :form-desc="fields" :request-fn="submit">
		</ele-form>
	</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class CategoryList extends Vue {
	@Prop(String) id!: string
	data = {}
	fields = {
		// _id: { label: 'ID' },
		name: { label: '目录名称', type: 'input' },
	}

	get isNew() {
		return !this.id
	}

	async fetch() {
		const res = await this.$http.get(`categorys/${this.id}`)
		this.data = res.data
	}

	async submit(data: any) {
		const url = this.isNew ? `categorys` : `categorys/${this.id}`
		const method = this.isNew ? 'post' : 'put'
		await this.$http[method](url, data)
		this.data = {}
		this.$message.success('保存成功')
		this.$router.go(-1)
	}

	created() {
		!this.isNew && this.fetch()
	}
}
</script>

<style>
</style>