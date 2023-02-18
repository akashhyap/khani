const axios = require("axios");


module.exports = async (req, res) => {
    const subscriber = req.body;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const LIST_ID = process.env.MAILCHIMP_LIST_ID;
    // mailchimp datacenter - mailchimp api keys always look like this:
    // fe4f064432e4684878063s83121e4971-us6
    // We need the us6 part
    const DATACENTER = process.env.MAILCHIMP_API_KEY.split("-")[1];

    try {
      const { data } = await axios.get(`https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members?email=${subscriber.email_address}`, {
        headers: {
          'Authorization': `auth ${API_KEY}`
        }
      });
  
      if (data.members.length > 0 && data.members[0].email_address === subscriber.email_address) {
        return res.status(400).json({ error: 'Email already exists' });
      }
  
      const { data: result } = await axios.post(`https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`, subscriber, {
        headers: {
          'Authorization': `auth ${API_KEY}`
        }
      });
  
      res.json(result);
    } catch (error) {
      res.status(error.response.status).json({ error: error.response.data });
    }
  };
