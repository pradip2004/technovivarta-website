"use client"
import { useState, useEffect } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { client, urlFor } from '../../sanity';
import Link from "next/link";
import 'animate.css';
// Define the TeamMember interface
interface TeamMember {
  _id: string;
  name: string;
  designation: string;
  domain: string;
  image: string;
  linkedin?: string;
  facebook?: string;
  instagram?: string;
  featured: boolean;
}

function Team() {
  const teams: TeamMember[] = [
    // Management Leads
    {
      _id: '1',
      name: 'Sanskar Chakraborty',
      designation: 'Management Lead',
      domain: 'Management',
      image: '/Sanskar 4.jpg',
      linkedin: 'https://www.linkedin.com/in/sanskar-chakraborty-5a7074292',
      instagram: 'https://www.instagram.com/sanskar.2501?igsh=MTJrOTVvbHFiaTJ6bQ==',
      featured: true,
    },
    {
      _id: '2',
      name: 'Arijit Konar',
      designation: 'Management Lead',
      domain: 'Management',
      image: '/Konar.jpg',
      linkedin: 'https://www.linkedin.com/in/arijit-k-941128296/',
      instagram: 'https://www.instagram.com/charybd1sss?igsh=NXQ4N3c5eWM3aWF0',
      featured: true,
    },
    {
      _id: '3',
      name: 'Tannishtho Das Gupta',
      designation: 'Management Lead',
      domain: 'Management',
      image: '/Rio 1.jpg',
      featured: true,
    },
    {
      _id: '4',
      name: 'Shreya Moulick',
      designation: 'Management Lead',
      domain: 'Management',
      image: '/Moulick 2.jpg',
      featured: true,
    },
    {
      _id: '5',
      name: 'Gunja Yadav',
      designation: 'Management Lead',
      domain: 'Management',
      image: '/Gunja.jpg',
      featured: true,
    },

    // Executive Leads
    {
      _id: '6',
      name: 'Deep Jain',
      designation: 'Executive Lead',
      domain: 'Executive',
      image: '/Deep 3.jpg',
      featured: false,
    },
    {
      _id: '7',
      name: 'Saurabh Sharma',
      designation: 'Executive Lead',
      domain: 'Executive',
      image: '/Saurabh.jpeg',
      featured: false,
    },

    // Domain Leads
    {
      _id: '8',
      name: 'Anshuman Krishna Yadav',
      designation: 'Domain Lead',
      domain: 'Computing',
      image: '/Anshuman.jpg',
      featured: false,
    },
    {
      _id: '9',
      name: 'Saikat Bhattacharya',
      designation: 'Domain Lead',
      domain: 'Computing',
      image: '/Saikat.jpeg',
      featured: false,
    },
    {
      _id: '10',
      name: 'Somsuddha Basak',
      designation: 'Domain Lead',
      domain: 'Fun Events',
      image: '/Somsuddha.jpg',
      featured: false,
    },
    {
      _id: '11',
      name: 'Vishal Kumar',
      designation: 'Domain Lead',
      domain: 'Fun Events',
      image: '/VishalK.jpg',
      featured: false,
    },
    {
      _id: '12',
      name: 'Aditya Basu',
      designation: 'Domain Lead',
      domain: 'Gaming',
      image: '/AdityaCore.jpg',
      featured: false,
    },
    {
      _id: '13',
      name: 'Pritha Sarkar',
      designation: 'Domain Lead',
      domain: 'Gaming',
      image: '/PrithaCore.jpg',
      featured: false,
    },
    {
      _id: '14',
      name: 'Aprajita Kumari',
      designation: 'Domain Lead',
      domain: 'Innovation and Management',
      image: '/Aprajita.jpg',
      featured: false,
    },
    {
      _id: '15',
      name: 'Debanjali Das',
      designation: 'Domain Lead',
      domain: 'Mechmania',
      image: '/Debanjali.jpeg',
      featured: false,
    },
    {
      _id: '16',
      name: 'Devrup Ghosh',
      designation: 'Domain Lead',
      domain: 'Mechmania',
      image: '/Devrup.jpg',
      featured: false,
    },
    {
      _id: '17',
      name: 'Vishal Thakur',
      designation: 'Domain Lead',
      domain: 'Robotics',
      image: '/VishalT.jpg',
      featured: false,
    },
    {
      _id: '18',
      name: 'Triparna Singha',
      designation: 'Domain Lead',
      domain: 'Robotics',
      image: '/Triparna.jpg',
      featured: false,
    },
    {
      _id: '19',
      name: 'Trambak Ganguly',
      designation: 'Domain POC',
      domain: 'Designing',
      image: '/Trambak.jpg',
      featured: false,
    },
    {
      _id: '20',
      name: 'Shreyashee Dhar',
      designation: 'Domain POC',
      domain: 'Public & Relations',
      image: '/Shreyosee.jpg',
      featured: false,
    },
  ];

  const CoreTeams: TeamMember[] = [
    {
      _id: '21',
      name: 'Aaranya Ghoshal',
      designation: 'member',
      domain: 'Core Team',
      image: '/Aaranya.jpg',
      featured: false,
    },
    {
      _id: '22',
      name: 'Tripti Gupta',
      designation: 'member',
      domain: 'Core Team',
      image: '/Tripti.jpg',
      featured: false,
    },
    {
      _id: '23',
      name: 'Ankit Agarwal',
      designation: 'member',
      domain: 'Core Team',
      image: '/Ankit.jpg',
      featured: false,
    },
    {
      _id: '24',
      name: 'Asmita Mallick',
      designation: 'member',
      domain: 'Core Team',
      image: '/Asmita.jpg',
      featured: false,
    },
    {
      _id: '25',
      name: 'Kusum Banerjee',
      designation: 'member',
      domain: 'Core Team',
      image: '/Kusum.jpg',
      featured: false,
    },
    {
      _id: '26',
      name: 'Animesh Maity',
      designation: 'member',
      domain: 'Core Team',
      image: '/Animesh.jpg',
      featured: false,
    },
    {
      _id: '27',
      name: 'Paramita Mandal',
      designation: 'member',
      domain: 'Core Team',
      image: '/Paramita.jpg',
      featured: false,
    },
    {
      _id: '28',
      name: 'Anirban Mallick',
      designation: 'member',
      domain: 'Core Team',
      image: '/Ani.jpg',
      featured: false,
    },
    {
      _id: '29',
      name: 'Anuhya Bose',
      designation: 'member',
      domain: 'Core Team',
      image: '/Anuhya.jpg',
      featured: false,
    },
    {
      _id: '30',
      name: 'Joydwipta Basak',
      designation: 'member',
      domain: 'Core Team',
      image: '/Joydwipta.jpg',
      featured: false,
    },
    {
      _id: '31',
      name: 'Anishka Bharti',
      designation: 'member',
      domain: 'Core Team',
      image: '/Anishka.jpg',
      featured: false,
    },
    {
      _id: '32',
      name: 'Lopamudra Dey',
      designation: 'member',
      domain: 'Core Team',
      image: '/Lopa.jpg',
      featured: false,
    },
    {
      _id: '33',
      name: 'Subhadeep Mondal',
      designation: 'member',
      domain: 'Core Team',
      image: '/Subhodeep.jpg',
      featured: false,
    },
    {
      _id: '34',
      name: 'Aditya Chowdhury',
      designation: 'member',
      domain: 'Core Team',
      image: '/Aditya.jpg',
      featured: false,
    },
    {
      _id: '35',
      name: 'Sandipto Das',
      designation: 'member',
      domain: 'Core Team',
      image: '/Sandipto.jpg',
      featured: false,
    },
    {
      _id: '36',
      name: 'Anushmita Saha',
      designation: 'member',
      domain: 'Core Team',
      image: '/Anushmita.jpg',
      featured: false,
    },
    {
      _id: '37',
      name: 'Rani Bhattacharya',
      designation: 'member',
      domain: 'Core Team',
      image: '/Rani .jpg',
      featured: false,
    },
    {
      _id: '38',
      name: 'Adwitiya Santra',
      designation: 'member',
      domain: 'Core Team',
      image: '/Adwitiya .jpg',
      featured: false,
    },
    {
      _id: '39',
      name: 'Pritha Guha Thakurta',
      designation: 'member',
      domain: 'Core Team',
      image: '/Pritha.jpg',
      featured: false,
    },
    {
      _id: '40',
      name: 'Soumyadeep Saha',
      designation: 'member',
      domain: 'Core Team',
      image: '/Soumyadeep.jpg',
      featured: false,
    },
];


  const managementLeads = teams.filter(member => member.domain === 'Management');
  const executiveLeads = teams.filter(member => member.domain === 'Executive');
  const computingLeads = teams.filter(member => member.domain === 'Computing');
  const funEventsLeads = teams.filter(member => member.domain === 'Fun Events');
  const gamingLeads = teams.filter(member => member.domain === 'Gaming');
  const innovationAndManagementLeads = teams.filter(member => member.domain === 'Innovation and Management');
  const mechmaniaLeads = teams.filter(member => member.domain === 'Mechmania');
  const roboticsLeads = teams.filter(member => member.domain === 'Robotics');
  const designingLeads = teams.filter(member => member.domain === 'Designing');
  const publicRelationsLeads = teams.filter(member => member.domain === 'Public & Relations');
  const allDomainLeads = [
    ...computingLeads,
    ...funEventsLeads,
    ...gamingLeads,
    ...innovationAndManagementLeads,
    ...mechmaniaLeads,
    ...roboticsLeads,
    ...designingLeads,
    ...publicRelationsLeads,
  ];
  


  // const [team, setTeam] = useState<TeamMember[]>([]);

  // useEffect(() => {
  //   const query = '*[_type == "team"]';
  //   client.fetch<TeamMember[]>(query)
  //     .then((data: TeamMember[]) => setTeam(data))
  //     .catch((error) => console.error('Error fetching team data:', error));
  // }, []);

  // Filter team members by designation
  // const domainLeads = team.filter((teamMember) => teamMember.designation === 'Domain Lead');
  // const technicalLeads = team.filter((teamMember) => teamMember.designation === 'Technical Lead');
  // const managementLeads = team.filter((teamMember) => teamMember.designation === 'Management Lead');
  // const coreTeamMembers = team.filter((teamMember) => teamMember.designation === 'Member - Core Team');
  // const executiveTeam = team.filter((teamMember) => teamMember.designation === 'Executive Team');

  // const featuredDomainLeads = domainLeads.filter((teamMember) => teamMember.featured);
  // const featuredTechnicalLeads = technicalLeads.filter((teamMember) => teamMember.featured);
  // const featuredManagementLeads = managementLeads.filter((teamMember) => teamMember.featured);
  // const featuredCoreTeamMembers = coreTeamMembers.filter((teamMember) => teamMember.featured);
  // const featuredExecutiveTeam = executiveTeam.filter((teamMember) => teamMember.featured);

  return (
    <div>
      <div className="background"></div>
      <section className="teams-section">
        <div className="container mx-auto pt-7">
          <div className="animate__animated animate__fadeInUp mb-9 max-w-[800px]">
            <h2 className="mb-6 text-3xl font-extrabold leading-tight">
              Team
            </h2>
            <p className="text-lg md:text-xl lg:text-xl">
              At the helm of Techno Vivarta, you&apos;ll find our invaluable core team — a dedicated group of individuals who serve as the driving force behind our community&apos;s growth and success. With a shared passion for technology and innovation, they provide the leadership and inspiration needed to navigate the ever-evolving tech landscape, ensuring that Techno Vivarta remains a thriving hub for aspiring technocrats and tech enthusiasts alike.
            </p>
          </div>
          <h3 className="mb-9 text-center text-3xl font-extrabold leading-tight">Meet our Leads</h3>

          <h4 className="mb-9 text-center text-xl font-extrabold leading-tight">Management Leads</h4>
          <div className="animate__animated animate__fadeIn team-row mb-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {managementLeads.slice(0, 2).map((teamMember) => (
                <Card key={teamMember._id} className="flex flex-col items-center justify-center">
                  <CardHeader>
                    <Image
                      src={teamMember.image}
                      alt={teamMember.name}
                      className="h-[200px] w-[200px] overflow-hidden rounded-full"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      width={200}
                      height={200}
                    />
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-center text-center">
                    <div>
                      <h4 className="text-lg font-semibold">{teamMember.name}</h4>
                      <p className="text-sm text-gray-600">{teamMember.designation}</p>
                    </div>
                    <div className="mt-3 flex gap-3">
                      {teamMember.linkedin && (
                        <Link
                          href={teamMember.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLinkedinIn size={20} />
                        </Link>
                      )}
                      {teamMember.facebook && (
                        <Link
                          href={teamMember.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaFacebook size={20} />
                        </Link>
                      )}
                      {teamMember.instagram && (
                        <Link
                          href={teamMember.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaInstagram size={20} />
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-6">
              {managementLeads.slice(2).map((teamMember) => (
                <Card key={teamMember._id} className="flex flex-col items-center justify-center">
                  <CardHeader>
                    <Image
                      src={teamMember.image}
                      alt={teamMember.name}
                      className="h-[200px] w-[200px] overflow-hidden rounded-full"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      width={200}
                      height={200}
                    />
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-center text-center">
                    <div>
                      <h4 className="text-lg font-semibold">{teamMember.name}</h4>
                      <p className="text-sm text-gray-600">{teamMember.designation}</p>
                    </div>
                    <div className="mt-3 flex gap-3">
                      {teamMember.linkedin && (
                        <Link
                          href={teamMember.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLinkedinIn size={20} />
                        </Link>
                      )}
                      {teamMember.facebook && (
                        <Link
                          href={teamMember.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaFacebook size={20} />
                        </Link>
                      )}
                      {teamMember.instagram && (
                        <Link
                          href={teamMember.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaInstagram size={20} />
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>


          <h4 className="mb-9 text-center text-xl font-extrabold leading-tight">Executive Leads</h4>
        <div className="animate__animated animate__fadeIn team-row mb-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {executiveLeads.map((teamMember) => (
              <Card key={teamMember._id} className="flex flex-col items-center justify-center">
                <CardHeader>
                  <Image
                    src={teamMember.image} 
                    alt={teamMember.name}
                    className="h-[200px] w-[200px] overflow-hidden rounded-full"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    width={200}
                    height={200}
                  />
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center text-center">
                  <div>
                    <h4 className="text-lg font-semibold">{teamMember.name}</h4>
                    <p className="text-sm text-gray-600">{teamMember.designation}</p>
                  </div>
                  <div className="mt-3 flex gap-3">
                    {teamMember.linkedin && (
                      <Link href={teamMember.linkedin}
                        target="_blank" rel="noopener noreferrer"
                      >
                        <FaLinkedinIn size={20} />
                      </Link>
                    )}
                    {teamMember.facebook && (
                      <Link href={teamMember.facebook}
                        target="_blank" rel="noopener noreferrer"
                      >
                        <FaFacebook size={20} />
                      </Link>
                    )}
                    {teamMember.instagram && (
                      <Link href={teamMember.instagram}
                        target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={20} />
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <h4 className="mb-9 text-center text-xl font-extrabold leading-tight">Domain Leads</h4>
        <div className="animate__animated animate__fadeIn team-row mb-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {allDomainLeads.map((teamMember) => (
              <Card key={teamMember._id} className="flex flex-col items-center justify-center">
                <CardHeader>
                  <Image
                    src={teamMember.image} 
                    alt={teamMember.name}
                    className="h-[200px] w-[200px] overflow-hidden rounded-full"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    width={200}
                    height={200}
                  />
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center text-center">
                  <div>
                    <h4 className="text-lg font-semibold">{teamMember.name}</h4>
                    <p className="text-sm text-gray-600">{teamMember.designation} - { teamMember.domain }</p>
                  </div>
                  <div className="mt-3 flex gap-3">
                    {teamMember.linkedin && (
                      <Link href={teamMember.linkedin}
                        target="_blank" rel="noopener noreferrer"
                      >
                        <FaLinkedinIn size={20} />
                      </Link>
                    )}
                    {teamMember.facebook && (
                      <Link href={teamMember.facebook}
                        target="_blank" rel="noopener noreferrer"
                      >
                        <FaFacebook size={20} />
                      </Link>
                    )}
                    {teamMember.instagram && (
                      <Link href={teamMember.instagram}
                        target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={20} />
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* <h3 className="mb-9 text-center text-3xl font-extrabold leading-tight">Meet our Executive Team</h3>
        <div className="animate__animated animate__fadeIn team-row mb-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {featuredExecutiveTeam.map((teamMember) => (
              <Card key={teamMember._id} className="flex flex-col items-center justify-center">
                <CardHeader>
                  <Image
                    src={urlFor(teamMember.image).url()} 
                    alt={teamMember.name}
                    className="h-[200px] w-[200px] overflow-hidden rounded-full"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    width={200}
                    height={200}
                  />
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center text-center">
                  <div>
                    <h4 className="text-lg font-semibold">{teamMember.name}</h4>
                    <p className="text-sm text-gray-600">{ teamMember.domain }, {teamMember.designation}</p>
                  </div>
                  <div className="mt-3 flex gap-3">
                    {teamMember.linkedin && (
                      <Link href={teamMember.linkedin}
                        target="_blank" rel="noopener noreferrer"
                      >
                        <FaLinkedinIn size={20} />
                      </Link>
                    )}
                    {teamMember.facebook && (
                      <Link href={teamMember.facebook}
                        target="_blank" rel="noopener noreferrer"
                      >
                        <FaFacebook size={20} />
                      </Link>
                    )}
                    {teamMember.instagram && (
                      <Link href={teamMember.instagram}
                        target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={20} />
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

        <h3 className="mb-9 text-center text-3xl font-extrabold leading-tight">Meet our Core Team</h3>
        <div className="animate__animated animate__fadeIn team-row mb-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {CoreTeams.map((teamMember) => (
              <Card key={teamMember._id} className="flex flex-col items-center justify-center">
                <CardHeader>
                  <Image
                    src={teamMember.image} 
                    alt={teamMember.name}
                    className="h-[200px] w-[200px] overflow-hidden rounded-full"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    width={200}
                    height={200}
                  />
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center text-center">
                  <div>
                    <h4 className="text-lg font-semibold">{teamMember.name}</h4>
                    <p className="text-sm text-gray-600">{teamMember.designation} - { teamMember.domain }</p>
                  </div>
                  <div className="mt-3 flex gap-3">
                    {teamMember.linkedin && (
                      <Link href={teamMember.linkedin}
                        target="_blank" rel="noopener noreferrer"
                      >
                        <FaLinkedinIn size={20} />
                      </Link>
                    )}
                    {teamMember.facebook && (
                      <Link href={teamMember.facebook}
                        target="_blank" rel="noopener noreferrer"
                      >
                        <FaFacebook size={20} />
                      </Link>
                    )}
                    {teamMember.instagram && (
                      <Link href={teamMember.instagram}
                        target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={20} />
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> 

          {/* Render other sections (Technical Leads, Management Leads, Core Team) similarly */}

        </div>
      </section>
    </div>

  );
}

export default Team;
