import * as React from "react"
import { Link } from 'gatsby';

export default function Footer() {
    return (
        <footer>
        <p>&copy; Slick's Slices {new Date().getFullYear()}</p>
        </footer>
        )
}