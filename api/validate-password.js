export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  // Password yang disimpan (jangan lupa ubah sesuai kebutuhan Anda)
  const PASSWORD = "mysecurepassword";

  // Ambil password dari query
  const { password } = req.query;

  if (!password) {
    return res.status(400).json({ success: false, message: 'Password is required' });
  }

  if (password === PASSWORD) {
    return res.status(200).json({ success: true, message: 'Password validated successfully' });
  } else {
    return res.status(401).json({ success: false, message: 'Invalid password' });
  }
}
