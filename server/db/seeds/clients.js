/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('clients').del()
  await knex('clients').insert([
    {
      id: 1,
      business_name: 'Skynet Finance',
      contact_name: 'Jason Beam',
      email: 'jason@skynet.com',
      phone: '021 445 6987',
      address: '26 Hindman Road',
      rate: 49,
      isActive: false,
    },
    {
      id: 2,
      business_name: 'Sherry Kitchen',
      contact_name: 'Melissa Kip',
      email: 'melissa@sherrykiten.com',
      phone: '+6421 654 2157',
      address: '4 Pawling Road',
      rate: 45,
      isActive: true,
    },
    {
      id: 3,
      business_name: 'Grayson and Co',
      contact_name: 'Sarah Grayson',
      email: 'accounts@grayson.co.nz',
      phone: '09 442 6841',
      address: '67 Gulseth Lane',
      rate: 84,
      isActive: true,
    },
    {
      id: 4,
      business_name: 'Epic landscapes',
      contact_name: 'Stewart Smith',
      email: 'epic@landscapes.co.nz',
      phone: '021 789 2133',
      address: '77 Fieldstone Pass',
      rate: 57,
      isActive: false,
    },
    {
      id: 5,
      business_name: 'Turner LLC',
      contact_name: 'Shanie Trotton',
      email: 'strotton4@nationalgeographic.com',
      phone: '027 4687 998',
      address: '14 Menomonie Circle',
      rate: 46,
      isActive: true,
    },
    {
      id: 6,
      business_name: 'Blossom Interior Design',
      contact_name: 'Maya Finch',
      email: 'maya@blossom.co.nz',
      phone: '021 361 2911',
      address: '32 Queens Street',
      rate: 91,
      isActive: true,
    },
    {
      id: 7,
      business_name: 'Mechanic Mike',
      contact_name: 'Mike Holowitz',
      email: 'mholowitz@gmail.com',
      phone: '09 454 9261',
      address: '33 Twill Road',
      rate: 59,
      isActive: false,
    },
    {
      id: 8,
      business_name: 'Wholesale Security',
      contact_name: 'Penelope Green',
      email: 'accounts@wholesalesecurity.com',
      phone: '0800 654 1128',
      address: '48 Monica Street',
      rate: 66,
      isActive: true,
    },
    {
      id: 9,
      business_name: 'I love Pies',
      contact_name: 'Lexy McInerney',
      email: 'lmcinerney8@wufoo.com',
      phone: '09 998 6541',
      address: '65 Melody Place',
      rate: 87,
      isActive: false,
    },
    {
      id: 10,
      business_name: 'Snowflake Weddings',
      contact_name: 'Katee Roussel',
      email: 'kroussel9@shareasale.com',
      phone: '021 364 7841',
      address: '71 Kenwood Avenue',
      rate: 39,
      isActive: false,
    },
  ])
}
