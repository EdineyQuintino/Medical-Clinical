/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
    return knex.schema.createTable('patient', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('birthdate').notNullable();
        table.string('cpf').notNullable();
        table.string('number').notNullable();
        table.string('agreementnumber').notNullable();
        table.string('road').notNullable();
        table.string('housenumber').notNullable();
        table.string('district').notNullable();
        table.string('city').notNullable();
        table.string('cep').notNullable();
        table.string('uf', 2).notNullable();
        table.string('medic_id').unsigned();
        table.foreign('medic_id')
        .references('medic.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

    });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('patient');
};

