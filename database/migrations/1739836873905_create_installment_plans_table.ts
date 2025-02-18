import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'installment_plans'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.boolean('status').notNullable().defaultTo(true)     
      table.integer('cliente_id').unsigned().references('id').inTable('clientes').onDelete('CASCADE') // chave estrangeira
      table.integer('installment_number').notNullable() // número da parcela
      table.integer('installments').notNullable() // parcelas
      table.decimal('total_value').notNullable() // valor
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.date('final_date') // data de vencimento
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}