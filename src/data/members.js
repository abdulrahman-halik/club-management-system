/**
 * Mock data for club members
 * 
 * Membership Types:
 * - PLAYER: Active playing member
 * - SOCIAL: Social member (non-playing)
 * - JUNIOR: Under 18 player
 * - LIFE_MEMBER: Honored member
 * 
 * Visibility Levels:
 * - PUBLIC: Visible to everyone
 * - MEMBER: Visible to other logged-in members
 * - ADMIN: Visible only to admins
 */

export const MEMBERS_DATA = [
    {
        id: 'm1',
        name: "James Wilson",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        role: "1st XI Captain",
        membershipType: "Player",
        status: "Active",
        joinDate: "2018-03-15",
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm fast",
        team: "1st XI",
        contact: {
            email: "james.wilson@example.com",
            phone: "+44 7700 900123"
        },
        privacy: {
            visible_to: "PUBLIC"
        }
    },
    {
        id: 'm2',
        name: "Sarah Thompson",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        role: "Social Secretary",
        membershipType: "Social",
        status: "Active",
        joinDate: "2020-05-10",
        committeeRole: "Social Secretary",
        contact: {
            email: "sarah.t@example.com",
            phone: "+44 7700 900456"
        },
        privacy: {
            visible_to: "MEMBER"
        }
    },
    {
        id: 'm3',
        name: "Michael Chen",
        photo: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        role: "Junior Coach",
        membershipType: "Life Member",
        status: "Active",
        joinDate: "2010-01-20",
        battingStyle: "Left-hand bat",
        bowlingStyle: "Slow left-arm orthodox",
        contact: {
            email: "m.chen@example.com",
            phone: "+44 7700 900789"
        },
        privacy: {
            visible_to: "MEMBER"
        }
    },
    {
        id: 'm4',
        name: "Emily Davis",
        photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        role: "U15 Player",
        membershipType: "Junior",
        status: "Active",
        joinDate: "2023-04-01",
        battingStyle: "Right-hand bat",
        team: "U15 Mixed",
        contact: {
            email: "emily.d@example.com", // Should be parent's contact in real app
            phone: "+44 7700 900321"
        },
        privacy: {
            visible_to: "ADMIN" // Junior contacts usually stricter
        }
    },
    {
        id: 'm5',
        name: "David Miller",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        role: "2nd XI Player",
        membershipType: "Player",
        status: "Inactive",
        joinDate: "2019-06-12",
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm medium",
        team: "2nd XI",
        contact: {
            email: "david.miller@example.com",
            phone: "+44 7700 900654"
        },
        privacy: {
            visible_to: "MEMBER"
        }
    },
    {
        id: 'm6',
        name: "Robert Taylor",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        role: "Treasurer",
        membershipType: "Committee",
        status: "Active",
        joinDate: "2015-11-30",
        committeeRole: "Treasurer",
        contact: {
            email: "treasurer@united-cricket.com",
            phone: "+44 7700 900987"
        },
        privacy: {
            visible_to: "PUBLIC"
        }
    }
];

export const MEMBERSHIP_TYPES = ["All", "Player", "Social", "Junior", "Life Member"];
