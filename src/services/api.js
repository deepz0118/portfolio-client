import axios from 'axios'


const API = "https://66e526f85cc7f9b6273c6cae.mockapi.io"

const getProjects = () => axios.get(`${API}/user`)
const getProjectbyID = (id) => axios.get(`${API}/user/${id}`)
const addProject = (projectdata) => axios.post(`${API}/user`, projectdata)
const editProject = (id, projectdata) => axios.put(`${API}/user/${id}`, projectdata)
const deleteProject = (id) => axios.delete(`${API}/user/${id}`)
export { getuser, getuserbyID, adduser, edituser, deleteuser }