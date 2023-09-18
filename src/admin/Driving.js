import React, { useEffect, useState } from 'react'
import "./Driving.css"
import { FiSearch } from "react-icons/fi"
import logo from "../assets/logo.png"
import axios from 'axios'
import { baseUrl } from '../bases/bases'
import { FaMotorcycle } from 'react-icons/fa'
import Partenaires from '../components/partenaires/Partenaires'
import Maps from './Maps'

const Driving = () => {

    const [courses, setCourses] = useState([]);
    const [coursesSorted, setCoursesSorted] = useState([]);

    const getAllCourses = async () => {
        try {
            const { data } = await axios.get(`${baseUrl}/courses`);
            setCourses(data && data.data);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getAllCourses();
    }, []);

    const prendreCourse = async (id) => {
        try {
            await axios.put(`${baseUrl}/courses/${id}`, {
                isActive: true
            });
            getAllCourses();
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        let coursesFilter = courses && courses.length > 0 && courses.filter(val => !val.isActive);
        setCoursesSorted(coursesFilter);
    }, [courses])

    return (
        <>
            <div className='driving'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className='logo'>
                        <img src={logo} alt="" />
                        <span>Transplus</span>
                    </div>
                    <div className='contentSearch'>
                        <input type="search" placeholder='Rechercher par nom ou adresse' />
                        <FiSearch size={20} />
                    </div>
                </nav>

                <div className='content'>
                    <div className='alert alert-success'>
                        {
                            coursesSorted && coursesSorted.length
                        } Courses disponibles
                    </div>

                    <Maps coursesSorted={coursesSorted} />
                    <div className='grille mt-3'>
                        {
                            coursesSorted && coursesSorted.length > 0 ?
                                coursesSorted.map(val => {
                                    return <div className='card' key={val.id}>
                                        <div className='div1'>
                                            <h5>Course N°{val.id}</h5>
                                            <FaMotorcycle size={20} />
                                        </div>
                                        <div>
                                            <span>Départ : </span>
                                            <span>{val.depart}</span>
                                        </div>
                                        <div>
                                            <span>Destination : </span>
                                            <span>{val.arr}</span>
                                        </div>

                                        <div>
                                            <span>Distance : </span>
                                            <span>{val.distance}</span>
                                        </div>

                                        <div>
                                            <span>Temps : </span>
                                            <span>{val.time}</span>
                                        </div>

                                        <button className='btn btn-success' onClick={() => prendreCourse(val && val.id)}>
                                            Prendre
                                        </button>
                                    </div>
                                })
                                : "0 courses commandées."
                        }
                    </div>
                </div>
            </div>

            <Partenaires />
        </>
    )
}

export default Driving