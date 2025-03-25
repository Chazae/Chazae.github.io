---
layout: page
title: PRCCDC 2016
description: 
img: assets/img/prccdclogo.png
importance: 1
category: Cybersecurity
---

# Preparation  

Our team started organizing for the 2016 Pacific Rim Cyber Defense Competition in September of 2016. With 6 available slots on the team roster, and one backup position, we decided to assign roles.  

### Team Roles  

- Chase - Active Directory Administrator
- Eli - Web Server Administrator
- Matt - Host Hardening Specialist
- Austin - Media Database Administrator
- Brian - Network Security Administrator
- Quinton - Presents Incident Response to Management
- Wes - Fill  

### Competition Outline  

While specific operating systems used in the competition were hidden from us, we knew the basics. Our team was to be given a “fake” business network. This network included a Web Server, Active Directory Service, various databases, and multiple hosts. The competition itself ran for two days in twelve hour increments.  

Professional Penetration testers from companies/organizations like the FBI, Raytheon, Google. HP, Dell, Intel, and the CIA were to infiltrate this network. Their goal was to steal “flags”, disrupt user service, and eventually shut down our network.  

The only documentation allowed to us were things publicly available on the internet. Hosting our own webserver prior was not allowed. This meant that we were unable to bring things like customized Group Policy Administrative Templates, private notes, or hardening documentation.  

Our team was tasked to prevent intrusions by these professional hackers, and mitigate damage to the network when detected. We were given fifteen minutes at the start of the competition to harden every machine assigned to us on the network. After those first fifteen minutes, the professional pen-testers could launch their attack.  

---

# Competition - Day 1  

### First Fifteen Minutes  

Our view upon entering the competition was that the result of our hardening techniques within these first fifteen minutes of the competition would determine what problems the team would face for the rest of the event.

Everyone was assigned their respective machine for their position.

Operating Systems in use:

| OS  | Service(s) | Administrator |
| --- | --- | --- |
| Windows Server 2012 | Active Directory/DHCP Server | Chase |
| SunOS (Unix) | Old Database that could not be disconnected | Austin |
| Windows  7 | User | Matt |
| Ubuntu Host | User | Brian |
| Ubuntu Server | Web Server | Eli |  

### Hardening Windows Server 2012  

Upon logging on to the Windows Server 2012 machine, I realized the the password policy was weak, the service pack was outdated, and there were far too many unnecessary third party applications for a backend server. While every

Here is a quick run down on what I changed first.

1. Turn on Firewall

2. Set Strict Firewall rules

3. Uninstalled unnecessary applications

4. Updated and performed a virus scan using Windows Defender

5. Installed, updated, and performed a malware scan using Malwarebytes

6. Reduced the amount of Groups with Administrative privleges

7. Verified valid User Accounts based off of staff sheet we were given for the fake busimess

8. Remove Unused Accounts

9. Remove Guest Account access for business network

10. Remove Administrative Roles from Every account except mine

11. Assigned Users to correct Groups while adhering to the Least-Privelege Principal

12. Set password policy

13. Set passwords to be complicated

14. Write those password on a notepad for time being, with the option for them the be changed upon next login.

15. Turn off unnecessary services  

### Quiet Day  

Most of the day was spent reading network logs and filing out Incident Report Sheets. When Brian was able to identify an unsuccessful attack through a Snort. 

After the competition we would come to find out that we had done really well, but they had already stolen the flag on our web server. Though no team was able to secure their flag by the end of the competition, it put into perspective just how stealthy and persistent a cyber attack can be.  

---

# Competition - Day 2  

Upon booting up our respective machines, we found that a few attacks had occurred during the night. The results of these attacks were devastating to our networks CIA triad.

Our website had been defaced, users could not connect to the login server, and the Windows Server 2012 machine had been fully compromised.

### Web Server Backup  

The first problem was solved incredibly quickly. Eli’s first steps within his first fifteen minutes had him making a backup of the website. He encrypted this backup, and then stored it within a hidden directory he made on the Ubuntu Server. Though the attacker was able to deface the live website, they did not find the hidden folder containing the back-up. Eli restored the web site to the version prior to it’s defacement almost instantly.

### Sticky Keys Exploit  

The Windows Server I was in charge of had been compromised, and there was seemingly no way back into it outside of a fresh install. Every available user profile either had it’s password changed or was removed entirely.

Prior to this competition I had competed in a few Red-Team Competitions. Part of a penetration testers methodology includes leaving a backdoor in a previously compromised network in order to regain access when needed. When this tactic is employed successfully, it turns a normal hack into an Advanced Persistent Threat. 

As I had experience hacking Windows Operating Systems, I knew about a common privilege escalation tactic named the “Sticky Keys” exploit. The attack leverages the insecure method in which the “Sticky Keys” menu is launched. 

The intended use of sticky keys is to provide an ease of access feature for multi-key commands when using Windows. You access the menu to enable this option by pressing shift 5 times in a row. This menu is normally located in *C:\Windows\System32\sethc.exe* 

The attack is pretty simple and usually goes as follows:

1. Create a copy of cmd.exe
2. rename this copy to “sethc.exe”
3. replace the original “sethc.exe” with the one you just made
4. upon pressing shift 5 times, sticky keys will now launch a command shell with the current users privileges
5. Upon logging out and using this hack while at the login screen, a command prompt with system level privilege as the system level privileges are used to determine which user profile to boot.

Staring at the login screen, unable to access any of my accounts, I decided to check to see if the exploit was present. A SYSTEM level command prompt popped on the screen signifying that it was, and I was able to remove the Administrator role from every account except for one I created. 

### Subnet Swap  

After regaining access to the Windows 2012 Server, it seemed as if the computer was disconnected from its original network entirely. The only other computer  we were able to ping was the Ubuntu Web Server. 

As our entire team came from a Computer Science background, none of us had any formal experience within the realm of computer networking. While we were able to write secure web applications, harden OSs, and understand the complexities of buffer overflow attacks, our network subnetting knowledge was lacking. 

After an hour of troubleshooting without online capabilities, we finally stumbled across a solution by starting and stopping the DhcpServer service. Though we were back online, we had lost an hour of availability. 

# 2nd Place Finish  

The scoring rubric for this competition was complicated and a bit flexible depending upon how much damage a hack had done to a team. As most of the attacks were scripted, with  Our team scored highest in “Scripted Attack Defense” and “Mitigation”.

As most of us were competing for our first time, a second place finish felt incredible. 

---

# Talking to the Pen-Testers  

Praises

- Shout out to Brian for intrusion detection! His Snort filters were picking up multiple different attacks on the network, and the resulting Incident Response Plans that we were able to show “Management” (Judges) earned us a large amount of points.
- Shout out to Eli for having the wherewithal to back up the entire web server as his first step on the machine
- One of the hackers was surprised to see that they no longer had access to the Windows Server 2012 machine. This was due to my removal of rogue administrator accounts through the leftover “Sticky Keys” exploit
    - In addition, most of the Windows Server 2012 machines were bricked the first day.
    - Personalized attacks had to be made on our teams Windows Server 2012 machine as the generic scripted attacks were successful

Methods Discussed

- nmap
    - Installed on the rogue XP box
        - Used to fingerprint the other systems on our network
        - Definition of a “Pivot” in a Penetration test
- Metasploit
    - Most exploits used were found on the Metasploit framework
    - Pre-scripted attacks were formed prior to the competition being started that encompassed a large amount of old/vulnerable OS’s
    - Scripted attacks were used for a couple of reasons
        - Networks were setup to be extremely vulnerable, with some of the vulnerabilities being “unpatchable” some critical services on the network were run on OS’s that were EoL
            - For EoL Windows OS’s one could request a custom security patch for the machine running the critical service, but that was not possible in the time frame of the competition
        - As they did not have to be quiet, they were able to launch attacks towards multiple points of failure on our network
            - Increases chances that some attacks would be “lost in the noise”
            - It can create panic within the defending team, which can lead to brash decision making
- Armitage
    - Used to manage and visualize targets after infiltration
    - Can also be used to recommended exploits based off of previous fingerprinting
- Social Engineering
    - Calls were made to the “Business Phone” asking for details about our web server.
    - Attempts to put USB sticks in the restrooms

# What To Focus On  

Networking Fundamentals

- Subnetting
- Private V.S. Public IP

Clear Incident Reporting

- Practice explanations prior to presentation

Cross-Training

- For so many reasons in so many industries
    - Being able to teach a subject shows mastery
    - Allows for a more conversational flow of problem solving
- Gives everyone a full picture of what the network looks like
    - Also gives a clear representation of how information is flowing through the network.

Red-Team Preparation

- Most team resources were Blue-Team focused which allowed for easy attack vectors to be missed
- Learning about more Red-Team attack techniques would have prepared us for some of the basic attacks that ended up working on our network
- Easier to understand where our weak points are outside of just theory

# Conclusions  

### The competition was much more about mitigation than intrusion prevention.  

The networks they gave us were setup to fail immediately, and the only true defense was to disconnect the server from the network entirely.  

As 50% of the points available for each team were directly tied to user service availability, this was an extremely large risk. Every team that attempted this method ended up losing more points than they would have gained.  

### Old Unpatched Operating Systems are extremely dangerous and prevalent  

Learning intrusion defense methods for older versions of Windows/Linux machines is not a waste of time. I assumed that introductory penetration test guides focused on older tech largely due to the ease of which it can be hacked. What I realize now is that old operating systems are not only prevalent in a large amount of businesses, but a commonly used attack vector.  

### Cybersecurity = Preparation  

The most important principal I took away from this event is that Cybersecurity in the real world is all about preparation.  

At the very least a security focused network administrator needs:  

1. To follow security fundamentals when configuring/managing their network
2. An Incident Response Plan
3. A Disaster Recovery Plan

# Start of a New Journey  

Prior to this competition, my time in college had been focused mainly on mathematics and the development of software. Computer Science was fascinating, but there was far too much focus on theory as opposed to application. As a consequence, our teams software defense was rock solid, but our network security faltered.

As a result of this realization, I decided to pursue a more specialized degree at Whatcom Community College. I immediately fell in love with the coursework. Instead of centering strictly on software, we focused on topics like Industrial Control Systems, Network Engineering, and Digital Forensics.

In 2021 I graduated from WCC with an Associates of Science in Cybersecurity.
